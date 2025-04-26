Coding Question 2: The Delayed Object Processor

You are given an array of objects, where each object has a name property and a process method. Write a function called processObjectsDelayed that takes this array and a delay in milliseconds. For each object in the array, after the specified delay, the process method of that object should be called, and it should log a message to the console including the object's name. Be mindful of the this context when calling the process method.
  
Example input array:
JavaScript
const items = [
  { name: "Alpha", process: function() { console.log(`Processing: ${this.name}`); } },
  { name: "Beta", process: function() { console.log(`Task for ${this.name} done.`); } }
];


//Solution
function processObjectsDelayed(items, delay) {
  items.forEach(item => {
    setTimeout(() => {
      item.process();
    }, delay);
  });
}
const items = [
  { name: "Alpha", process: function() { console.log(`Processing: ${this.name}`); } },
  { name: "Beta", process: function() { console.log(`Task for ${this.name} done.`); } }
];

processObjectsDelayed(items, 1000); 
