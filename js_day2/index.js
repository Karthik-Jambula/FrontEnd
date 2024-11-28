alert("Good")

prompt("give your name", ["karthik"])

let a=confirm("how are you")

for(i=1;i<=5;i++)
    console.log(i);
    let n=0
    while(n<5){
        n++;
        console.log(n)
    }
    let a=1;
    do{
        console.log(a)
        a++
    }
    while(a<5);
    let person={
        name:"KARTHIK",
        age:21
    }
    for(let key in person){
        console.log(key+":"+person[key]);
    }
    let arr=[1,2,3]
    for(let value of arr){
    console.log(value);
        
    }