let users=[
    {uid:1,uname:"pooja",gender:'female'},
    {uid:2,uname:"vijay",gender:'male'},
    {uid:3,uname:"venkat",gender:'male'},
    {uid:4,uname:"sandeep",gender:'male'},
     {uid:5,uname:"ashwini",gender:'female'},
      {uid:6,uname:"roopa",gender:'female'},
    ]


   let no_male_users=3;
   for(let i=0;i<=users.lenght-1;i++){
    if(users[i].gender==="male"){
        no_male_users=no_male_users+1;
    }
   }
   console.log("No of Male Users",no_male_users)