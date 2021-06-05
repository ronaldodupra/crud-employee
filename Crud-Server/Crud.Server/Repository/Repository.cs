using Crud.Server.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Crud.Server.Repository
{
    public abstract class Repository
    {
        protected readonly CrudContext _context;

        protected Repository(CrudContext context)
        {
            _context = context;
        }

        public async Task AddReferences(string type, List<string> references)
        {
            throw new System.NotImplementedException();
            //await _context.References.FindOneAndUpdateAsync(
            //     reference => reference.Type == type,
            //     Builders<Reference>.Update.AddToSetEach(reference => reference.Names, references.Except(
            //         _context.References.Find(reference => reference.Type == type).FirstOrDefault().Names
            //     )).CurrentDate(reference => reference.UpdatedAt)
            // );
        }
    }
}