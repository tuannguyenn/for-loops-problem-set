// 1.  Print all numbers betweeen -10 and 19
console.log('Print all numbers betweeen -10 and 19');
for(let i = -10 ; i <= 19 ; i++){
    console.log(i);
};
// 2.  Print all even numbers between 10 and 40
console.log('Print all even numbers between 10 and 40');
for(let w = 10; w <= 40; w+=2){
    console.log(w);
};
//  3. Print all numbers between 300 and 333
console.log('Print all numbers between 300 and 333');
for(let e = 300; e <= 333; e++){
    console.log(e);
};
//  4. Print all numbers divisible by 5 AND 3, between 5 and 75
console.log('Print all numbers divisible by 5 AND 3, between 5 and 75')
for(let p = 5; p <= 75; p++){
    if(p%5 == 0 && p%3 == 0){
        console.log(p);
    }
}
//  5. Print all numbers divisible by 5 OR 3, but NOT both,  between 5 and 75
console.log('Print all numbers divisible by 5 OR 3, but NOT both,  between 5 and 75');
for(let m = 5; m <= 75; m++){
    if(m%5 == 0 || m%3 == 0){
        //if(m != 15 && m != 30 && m != 45 && m != 60 && m != 75){
        if(!(m%5 == 0 && m%3 == 0)){
            console.log(m);
        }
    };
};