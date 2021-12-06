// As you can see, we can call 'testTwo()' before it is declared.

// Try to call 'testOne()' in the same way and see what happens.

// Test one is a function expression, meaning it can only be called after it has been expressed.

// Test two is a function declaration which is why is can be called before it is declared.

console.log(testTwo());

let test = () => {
    return "hola"
}

function testTwo(){
    return "hello"
}

console.log(test());
