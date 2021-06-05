Project: Employee-Crud

	Details:
	Front End: Angular Framework
	Backend: .Net Core Framework
	Database: Sql Server

Requirement:
	Go to command prompt install angular cli "npm install -g @angular/cli
	Visual Studio
	Sql Server
	Mircrosoft Sql Server Management Studio
	
	
Instructions:

	Database:
	1. Open Mircrosoft Sql Server Management Studio
	2. Right Click Databases import data-tier application
	3. Import .bacpac file.
	4. Select Database name e.g. "EmployeeRecords"
	5. refresh... check if the database and table(Employee) successfully imported
	

	FrontEnd
	1. Go to Command prompt path "crud-employee/crud"
	2. Add Node Module: npm install (takes time to finish)
	3. then type "npm start" (wait till the angular start)
	4. open browser from the URL type http://localhost:4200


	BackEnd:
	1. Open the Visual Studio, open the project crud-server
	2. copy the datasource name from the sqlserver
	3. find the appsettings.json from "crud-employee/crud-server" change the ConnectionStrings->crud to your datasource name save
	4. run the project from visual studio
	





