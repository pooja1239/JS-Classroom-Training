 let employees=[{"eid":1,"ename":"pooja","Gender":"Female"},
    {"eid":2,"ename":"cordie","Gender":"Male"}]

    //print no of Female employees?

    let no_Female_emp=0
    for(let emp of employees){
        if(emp.gender==="Female"){
            no_Female_emps++;
        }
    }
    console.log("No of Female Employees:-",no_Female_emps)