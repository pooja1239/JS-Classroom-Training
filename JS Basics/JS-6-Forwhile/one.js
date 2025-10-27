let employees=[{"eid":1,"ename":"pooja","Gender":"Female"},
    {"eid":2,"ename":"cordie","Gender":"Male"}]
   
    //print all employees names
    for(let emp of employees){
        //console.log(emp.ename)
        console.log(`Name:${emp.ename} and Gender-${emp.Gender}`)
    }