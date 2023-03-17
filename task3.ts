function caldis(productPrice,discount){
    if(discount<50){
        let disAmount= productPrice*(discount/100);
        console.log("Product Price = "+productPrice);
        console.log("discount Percentage = "+discount);
        console.log("discount amount = "+disAmount);
        let finalPrice=productPrice-disAmount;
        console.log("Final price = "+finalPrice);
    }
    else{
        console.log("invalid discount percentage");
    }
}
caldis(1000,10);
caldis(2000,60);
caldis(750,15);