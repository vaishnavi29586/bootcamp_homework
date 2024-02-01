function circleValues(radius){
    var p = 2 * Math.PI * radius;
    
    return("The Perimeter of circle is " + p);
    var a = Math.PI * radius * radius;
    return("The area of the circle is " + a);
}

console.log(circleValues(5));
