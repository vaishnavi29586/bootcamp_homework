function calcCircumference(radius){
    var c = Math.PI * 2 * radius;
    return("The circumference is " + c );
    
}
console.log(calcCircumference(5));


function calcArea(radius){
    var area = Math.PI * radius * radius ;
    return( "The area is " + area);

}
console.log(calcArea(5));