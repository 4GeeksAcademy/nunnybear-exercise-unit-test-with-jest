test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One Dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(1.3)
    const expected = 1.3 * 127.9;
    expect(fromDollarToYen(1.3)).toBe(166.27);
})
test("One Yen should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(127.9)
    const expected = 127.9 * 0.8;
    expect(fromYenToPound(1.7)).toBe(1.36);
})