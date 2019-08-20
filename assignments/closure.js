// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function parentFunction(para1) {
  let var1 = "string";
  let var2 = "string2";
  console.log(`${var1} and ${var2}`);

  function childFunction(para2) {
    console.log(para2);

    function grandFunction(para3) {
      console.log(`get ${var1} even though I am in grandFunc`);
    }
    grandFunction("argument");
  }
  childFunction("argument2");
}
parentFunction("argument3");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 0;
  function counter() {
    count++;
    return count;
  }
  return counter;
};

const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
