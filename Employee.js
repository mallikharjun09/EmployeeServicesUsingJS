class Employee{
      constructor(id, name, age, email, phone){
	this.id = id
	this.name = name
	this.age = age
	this.email = email
	this.phone = phone
      }
      getEmployeeDetails(){
	console.log("Employee ID         : "+this.id)
	console.log("Employee Name    : "+this.name)
	console.log("Employee Age       : "+this.age)
	console.log("Employee email     : "+this.email)
	console.log("Employee Phone   : "+this.phone)
	console.log("====================================")
      }
}

class EmployeeServices{
              constructor(){
	    this.employees = []
	    this.index = 0
	    this.employeeId = 100001
	    this.data = ""
	 }
              acceptEmployeeDetails(name,age,email,phone){
	        let emp = new Employee(this.employeeId,name,age,email,phone)
	        this.employees[this.index] = emp
	        this.index++
	        this.employeeId++
              }
              displayEmployeeDetails(){
	     this.data = "<table>"
	     this.data = this.data + "<tr><th>Employee Id</th><th>Employee Name</th><th>Age</th><th>Email Id</th><th>Phone number</th></tr>"
	          
	     for(var i=0;i<this.index;i++){
		let emp = this.employees[i];
		this.data = this.data + "<tr>"
		this.data = this.data + "<td>"+emp.id+"</td>"
		this.data = this.data + "<td>"+emp.name+"</td>"
		this.data = this.data + "<td>"+emp.age+"</td>"
		this.data = this.data + "<td>"+emp.email+"</td>"
		this.data = this.data + "<td>"+emp.phone+"</td></tr>"
                       }
	     this.data = this.data + "</table>"
	     return this.data
               }              
}





