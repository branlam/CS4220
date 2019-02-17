## Week 3 Homework - Due Friday 02/17/18 at 11:59pm
Complete all the problems below. 100 Points total. Please submit homework to CSNS.

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit do not hard code values (unless otherwise stated).
- For FULL credit upload only a single javascript file and output all answers to the console.


##### 1.  Write a function called print which accepts an object and prints to the console.
For full credit:
- The function should use destructing in the argument and use empty default values.
- It should additionally use template literals syntax when printing to the console.
- The printout to the console should look **exactly** like the give example below. (The words "Team", "Leader" and "Members" can be hardcoded).

```
    const group1 = {
        name: 'Justice League',
        leader: 'Wonder Woman',
        members: ['Batman', 'Superman']
    }

    const group2 = {
        name: 'Avengers',
        members: ['Hulk', 'Thor', 'Captain America']
    }

    print(group1)
    print(group2)

    //  Team: Justice League
    //  Leader: Wonder Woman
    //  Members: Batman and Superman

    //  Team: Avengers
    //  Leader:
    //  Members: Hulk, Thor and Captain America
```


#### 2. Write a class that allows you to build a grocery list and track items, quantity and optional price.
Each grocery entry will look like this: <br/>
`{
        item: 'item name'
        quantity: 1,
        price: 1.99  // optional
}`

The class should have the following methods:
- Class should be written to allow for dot chaining notation.
- constructor
   - Accepts an array of objects or if nothing is passed - defaults to an empty array <br />
- addItem(_object_): 
   - Accepts an object and adds a grocery to the list. Uses destructuring for the grocery object.  Use a default of 1 for quantity. <br />
- removeItem(_string_): 
   - Accepts a case insensitive string. Removes a grocery item by name if the quantity is 1. Else it decreases the quantity by 1. <br />
- addPrice(_string, number_): 
   - Accepts a case insensitive string and number. Adds the price to the specified grocery item. <br />
- addTotal(): 
   - Accepts no arguments.  Calculates the total of all known grocery prices. Takes into account quantity.  <br />
- print: 
   - Prints the details about the Groceries as formatted in the example below. Print should be called without `()`

```
        cart
            .addItem({ item: 'bread', quantity: '1'})
            .addItem({ item: 'soup', quantity: '3'})
            .addItem({ item: 'chips', quantity: '4'})
            .addItem({ item: 'soda', quantity: '1'})
            .addPrice('chiPs', 5.99)
            .removeItem('Chips')
            .addPrice('soda', 1.04)
            .addTotal()
            .print


        // Item: bread | Quantity: 1 | Price: n/a
        // Item: soup | Quantity: 3 | Price: n/a
        // Item: chips | Quantity: 3 | Price: 5.99
        // Item: soda | Quantity: 1 | Price: 1.04
        // Total: 19.01
```
