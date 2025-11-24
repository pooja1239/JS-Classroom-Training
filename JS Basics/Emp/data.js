let users=[{"uid":1,"name":"Wit","gender":"Male"},
{"uid":2,"name":"Sayer","gender":"Male"},
{"uid":3,"name":"Thaddus","gender":"Male"},
{"uid":4,"name":"Iolanthe","gender":"Bigender"},
{"uid":5,"name":"Berkley","gender":"Male"},
{"uid":6,"name":"Renata","gender":"Bigender"},
{"uid":7,"name":"Raphaela","gender":"Female"},
{"uid":8,"name":"Meaghan","gender":"Female"},
{"uid":9,"name":"Damian","gender":"Male"},
{"uid":10,"name":"Carey","gender":"Female"},
{"uid":11,"name":"Kariotta","gender":"Genderfluid"},
{"uid":12,"name":"Gypsy","gender":"Agender"},
{"uid":13,"name":"Maura","gender":"Genderfluid"},
{"uid":14,"name":"Royce","gender":"Male"},
{"uid":15,"name":"Camilla","gender":"Genderfluid"},
{"uid":16,"name":"Arda","gender":"Female"},
{"uid":17,"name":"Noelyn","gender":"Female"},
{"uid":18,"name":"Sisely","gender":"Female"},
{"uid":19,"name":"Madalena","gender":"Female"},
{"uid":20,"name":"Alyosha","gender":"Male"},
{"uid":21,"name":"Codee","gender":"Female"},
{"uid":22,"name":"Wash","gender":"Male"},
{"uid":23,"name":"Kaleena","gender":"Female"},
{"uid":24,"name":"Bentley","gender":"Male"},
{"uid":25,"name":"Davin","gender":"Male"},
{"uid":26,"name":"Adara","gender":"Female"},
{"uid":27,"name":"Merrile","gender":"Female"},
{"uid":28,"name":"Sasha","gender":"Female"},
{"uid":29,"name":"Cindra","gender":"Female"},
{"uid":30,"name":"Patric","gender":"Male"},
{"uid":31,"name":"Grata","gender":"Female"},
{"uid":32,"name":"Benedetto","gender":"Male"},
{"uid":33,"name":"Wallache","gender":"Male"},
{"uid":34,"name":"Roosevelt","gender":"Male"},
{"uid":35,"name":"Emmalynn","gender":"Female"},
{"uid":36,"name":"Arnuad","gender":"Male"},
{"uid":37,"name":"Dur","gender":"Male"},
{"uid":38,"name":"Horst","gender":"Male"},
{"uid":39,"name":"Essa","gender":"Female"},
{"uid":40,"name":"Laurent","gender":"Male"},
{"uid":41,"name":"Bryce","gender":"Male"},
{"uid":42,"name":"Lian","gender":"Female"},
{"uid":43,"name":"Jaine","gender":"Female"},
{"uid":44,"name":"Corinna","gender":"Female"},
{"uid":45,"name":"Aimil","gender":"Female"},
{"uid":46,"name":"Yalonda","gender":"Female"},
{"uid":47,"name":"Shelly","gender":"Female"},
{"uid":48,"name":"Nicole","gender":"Female"},
{"uid":49,"name":"Omero","gender":"Male"},
{"uid":50,"name":"Stirling","gender":"Male"}]

function dispaly_userData(){
    let rows=""
    for(let user of users){
        if(user.gender ==="Male"){
            rows=rows+`<tr>
                        <td>${user.uid}</td>
                        <td>${user.name}</td>
                        <td>${user.gender}</td>
                    </tr>`
        }
        
    }
    document.getElementById('userData').innerHTML=rows
}