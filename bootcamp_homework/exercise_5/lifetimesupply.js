function calculateSupply(age, amount){
    var maxAge=100;
    var total = (amount * 365);
    return("You will need " + total + " to last you until the ripe old age of " + maxAge);
}
console.log(calculateSupply(5, 10));