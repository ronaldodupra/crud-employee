using AutoMapper;
using Brownie.Server.Core.Startup;
using BrownieWebApi.Core.Startup;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace BrownieWebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           
            services.AddDatabase(Configuration);
            services.AddMemoryCache();
            services.AddApplicationServices();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost", "ionic://localhost");
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
            });

            app.UseHttpsRedirection();

            app.UseDefaultFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                // Prevent caching of index.html
                OnPrepareResponse = context =>
                {
                    if (context.File.Name == "index.html")
                    {
                        context.Context.Response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate");
                        context.Context.Response.Headers.Add("Pragma", "no-cache");
                        context.Context.Response.Headers.Add("Expires", "0");
                    }
                }
            });

            // Only redirect to front-end assets if request url doesn't start with "/api"
            app.MapWhen(
                x => !x.Request.Path.Value.StartsWith("/api"),
                builder => builder.UseSpa(spa => { }));

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}