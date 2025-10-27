let users=[
    {uid:1,uname:"Rahul",gender:'male'},
    {uid:2,uname:"pooja",gender:'Female'},
    {uid:3,uname:"priya",gender:'Female'},
    {uid:4,uname:"vijay",gender:'male'}]

    //print all Female users
    for(let user of users){
        if(user.gender==="Female"){
        console.log(user.uname)
        

    }
}
