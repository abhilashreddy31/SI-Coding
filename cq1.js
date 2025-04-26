Coding Question 1: The Encapsulated Counter Factory

Write a function called createUniqueCounter that, when invoked, returns a new counter object. Each counter object should have two methods:

●	increment(): Increments an internal counter variable (initially 0) and returns the new value.
●	getValue(): Returns the current value of the internal counter variable without modifying it.
  
Ensure that the internal counter variable is not directly accessible or modifiable from outside the counter object. Demonstrate the creation and usage of two independent counter objects created by createUniqueCounter.

  


function createUniqueCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

const counter1 = createUniqueCounter();
const counter2 = createUniqueCounter();

console.log(counter1.increment()); 
console.log(counter1.increment()); 
console.log(counter1.getValue());   

console.log(counter2.increment()); 
console.log(counter2.getValue());   
console.log(counter2.increment()); 
