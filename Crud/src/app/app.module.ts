
import { AppRoutingModule } from "./app-routing.module";
import {
  MatTableModule,
  MatExpansionModule,
  MatSortModule,
} from "@angular/material";
import { NgxPermissionsModule } from "ngx-permissions";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { MatRadioModule } from "@angular/material/radio";
import { MatListModule } from "@angular/material/list";
import { NgxPrintModule } from "ngx-print";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ImageCropperModule } from "ngx-image-cropper";

import { NgScrollbarModule } from "ngx-scrollbar";
import { MatChipsModule } from "@angular/material/chips";
import { MaterialModule } from "./shared/angular-material.module";
import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    FormEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    NgxPermissionsModule.forRoot(),
    MatExpansionModule,
    DragDropModule,
    MatCheckboxModule,
    MatRadioModule,
    NgxQRCodeModule,
    NgxPrintModule,
    MatListModule,
    ImageCropperModule,
    MatSortModule,
    NgScrollbarModule,
    MatChipsModule,
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: null,
  //     multi: true,
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
