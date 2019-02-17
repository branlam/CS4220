// #### 2. Write a class that allows you to build a TODO list and
// track items and optionally their priority as a string of (high, medium, low)
// Each todo entry will look like this: <br/>
// `{
//         todo: 'week 3 hw'
//         priority: 'high'
// }`

// The class should have the following methods:
// - Class should be written to allow for dot chaining notation.
// - constructor
//    - Accepts an array of objects or if nothing is passed - defaults to an empty array

// - addTODO(_object_):
//    - Accepts an object and adds a todo to the list.
//    - Uses destructuring for the todo object.
//    - Use a default of 'low' for priority.

// - removeTODO(_string_):
//    - Accepts a case insensitive string.
//    - Removes a todo TODO by name.

// - addPriority(_string, number_):
//    - Accepts a case insensitive string and number.
//    - Adds the price to the specified todo TODO.

// - countPriority():
//    - Accepts no arguments.  Calculates the total of all known todo priorities.

// - print:
//    - Prints the details about the TODOs as formatted in the example below. Print should be called without `()`

// ```
//         todos
//             .addTODO({ todo: 'sleep'})
//             .addTODO({ todo: 'cs4220 homework', priority: 'high'})
//             .addTODO({ todo: 'clean room', priority: 'high'})
//             .addTODO({ todo: 'play apex legends', priority: 'low'})
//             .removeTODO('clean ROOM')
//             .addPriority('slEEp', 'medium')
//             .countPriority()
//             .print


                // TODOs:
                // sleep with low priority
                // cs4220 homework with high priority
                // clean room with high priority
                // play apex legends with low priority

                // Priority Counts:
                // low: 2
                // high: 2
class TODO {
    constructor(todos = []) {
        this.todos = todos
        this.priorityCount = {}
    }

    addTODO({ todo, priority = 'low' }) {
        this.todos.push({ todo, priority })
        return this
    }

    removeTODO(name) {
        const newTODOs = []
        // filter methods on arrays
        // splice method

        // loop through todos
        // add it to the newTODO array
        // replace this.todos with the new array
    }

    countPriority() {
        this.todos.forEach(todo => {
            if (this.countPriority[todo.priority])
                this.priorityCount[todo.priority] += 1
            else
                this.priorityCount[todo.priority] = 1
        })

        return this
    }
}

const todos = new TODO()
todos
    .addTODO({ todo: 'sleep'})
    .addTODO({ todo: 'cs4220 homework', priority: 'high'})
    .addTODO({ todo: 'clean room', priority: 'high'})
    .addTODO({ todo: 'play apex legends', priority: 'low'})
    .removeTODO('clean ROOM')
    // .addPriority('slEEp', 'medium')
    // .countPriority()
    // .print