import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PageOptions } from "src/app/core/shared/PageOption";
import { Observable } from "rxjs";
import { PaginatedList } from "src/app/core/shared/PaginatedList";
import { EmployeeModel } from "../model/employee.model";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  apiUrl = "/api/employee";
  //localhost:5000/api/vendor/

  getEmployee(
    options: PageOptions,
    term = "",
  ): Observable<PaginatedList<EmployeeModel[]>> {
    const params = options.toObject();
    params.term = term;
    return this.httpClient.get<PaginatedList<EmployeeModel[]>>(
      this.apiUrl ,

      {
        params,
      }
    );
  }
  insertEmployee(form):Observable<EmployeeModel>{
    return this.httpClient.post<EmployeeModel>(this.apiUrl,form);
  }
  updateEmployee(form,id):Observable<EmployeeModel>{
    return this.httpClient.put<EmployeeModel>(this.apiUrl+`/${id}`,form);
  }
  deleteEmployee(id):Observable<EmployeeModel>{
    return this.httpClient.delete<EmployeeModel>(this.apiUrl+`/${id}`);
  }
  viewEmployee(id):Observable<EmployeeModel>{
    return this.httpClient.get<EmployeeModel>(this.apiUrl+`/${id}`);
  }
 


}
