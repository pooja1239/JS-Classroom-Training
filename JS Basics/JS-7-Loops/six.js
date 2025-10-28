let numbers=[18,8,232,1055,96,11]
//wap to print no of even numbers using
/*
1.for loop
2.while loop
3.do ..while loop
*/
let i=0;
even_numbers=0;
while(i<=numbers.length-1){
    if(numbers[i]%2===0)even_numbers++;
   
}
i++;


console.log("No of Even Numbers:",even_numbers)


for(let i=0;i<=numbers-1;i++){
    if(numbers[i]%2===0){
        no_evens++;

    }
    console.log("No of Evens:",no_evens)
}