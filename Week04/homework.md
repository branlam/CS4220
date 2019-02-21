## Week 4 Homework - Due Friday 02/22/18 at 11:59pm
Complete all the problems below. 100 Points total. Please submit homework to CSNS.

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit do not hard code values (unless otherwise stated).
- For FULL credit upload only a single javascript file and output all answers to the console.

---

#### 1. Using async/await syntax write a set of functions that adds numbers and awaits for the total.
Requirements
- Use async/await syntax
- Use Promise with setTimeout() in adder() function.
- adder(previous, next)
This function accepts the previous number and the next number. It resolves a Promise after 10ms to return the new total. You can assume that adder starts with it's intial previous as 0 (which can be hard coded).

- iterateNumbers(numbers)
This function accepts an array of numbers to be totaled.  It prints the total when all numbers have been added.

```
    iterateNumbers([1, 2, 3, 5, 8, 13, 21])
    // Total:
    // 53
```

#### 2. Using callbacks syntax write a set of functions that checks and makes a list of todos based on priorities.
Requirements
- Use callbacks
- Use setTimeout()

- checkPriority(todo, callaback)
This function accepts a todo object. It checks if the todo has a priority associated to it.
If it does then it callsback after 90ms with the priority object.
If it does not then it callsback with an error and only the name.

- makePriorityList(todos)
This function accepts an array of objects.  It prints the results ONLY when the entire todo array has been iterated.
It should print each the priority array and the error array seperately.

- EXTRA CREDIT (+10)
    - When printing inside makePriorityList(), print the array sorted by priority from highest to lowest.

```
    const todos = [{
        name: 'get coffee',
        priority: 90
    },
    {
        name: 'clean room',
        priority: null
    },
    {
        name: 'go to CS4220',
        priority: 40
    },
    {
        name: 'do homework before due date',
        priority: 80
    }]
    makePriorityList(todos)

    // Priority
    //   [ { name: 'get coffee', priority: 90 },
    //   { name: 'do homework before due date', priority: 80 },
    //   { name: 'go to CS4220', priority: 40 } ]
    // Missing Priority [ 'clean room' ]
```
