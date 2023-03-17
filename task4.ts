function factorial(num){
    let f=1;
    for (let i=1;i<=num;i++){
        f=f*i;    
    }
    console.log("factorial of "+ num +" is "+f);
}
factorial(4);
factorial(7);