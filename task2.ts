let fruits=["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits);
fruits.push("dates");
console.log("After Append ",fruits);
fruits.unshift("grapes");
console.log("after prepend ",fruits);
fruits.splice(2,1,"mango");
console.log("After replace ",fruits);