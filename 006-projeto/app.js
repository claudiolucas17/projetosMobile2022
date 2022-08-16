var num1 = 10;
var num2 = 15;
var num3 = 5;

console.log(num2 > num1);
console.log(num1 > num3);

if(num2 > num1 && num1 > num3){

console.log(`O ${num2} é maior que ${num1} e ${num1} é maior que ${num3}`);

}else{

console.log(`O ${num2} é menor que ${num1} e ${num1} é menor que ${num3}`);

}

if(num2 > num1 && num1 > num3){

    console.log(`O ${num2} é maior que ${num1} e ${num1} é maior que ${num3}`);
    
    }else{
    
    console.log(`O ${num1} é menor que ${num2}`);
    
    }

    if(num2 > num1 || num1 > num3){

        console.log(` 1 - ${num2} ${num1} ${num1} ${num3}`);
        
        }else{
        
        console.log(`2 - ${num2} ${num1} ${num1} ${num3}`);
        
        }