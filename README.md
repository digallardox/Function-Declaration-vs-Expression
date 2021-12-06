# Function-Declaration vs Function-Expression
###### A Quick Lesson by Diego Gallardo
##### Clone the JavaScript file to test expression hoisting

## Function Declaration: 
Function funDec( ) { \
  console.log("Hola Mundo") \
 };


## Function Expression:
const funExp = ( ) => { \
  console.log("Hola Mundo") \
};

## Hoisting
#### Function Declaration
Declared functions are hoisted, which means they are brought to the top of the document. This means they can be used before they are declared. For example, the code below is valid:

funDec()

Function funDec( ) { \
  console.log("Hola Mundo") \
 };
 
 ## Function Expression
 Expressed functions are not hoisted, which means they cannot be used before they are declared. This means the example above is not valid. They must be called after being expressed. For example, the code below is valid:

const funExp = ( ) => { \
  console.log("Hola Mundo") \
};

funExp()

#### When to use
Because it is best not to pollute the global scope, function expression is generally better because it will keep the global scope light and keep the code clean. Nonetheless, in the case where you want a function to be globally scoped, you will use function declaration.
