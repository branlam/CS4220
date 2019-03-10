const group1 = {
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman']
}

const group2 = {
    name: 'Avengers',
    members: ['Hulk', 'Thor', 'Captain America']
}

function print({
    name = "",
    leader = "",
    members = ""
}) {
    const allMembers = arr => {
        arr.forEach((item, key, arr) => {
            if(Object.is(arr.length - 1, key)){
                process.stdout.write(`and ${item} `)
            }
            else if(Object.is(arr.length - 2, key)){
                process.stdout.write(`${item} `)
            }
            else process.stdout.write(`${item}, `)
        })
    }
    console.log("Team: " + name);
    console.log("Leader: " + leader);
    process.stdout.write("Members: ");
    allMembers(members)
    process.stdout.write("\n\n")
}

print(group1)
print(group2)

class Grocery {

    constructor(groceryList = []) {
        this.groceryList = groceryList
        this.total = 0
    }

    addItem({
        item,
        quantity = 1,
        price = "n/a"
    }) {
        const newItem = {
            item: item,
            quantity: quantity,
            price: price
        }
        this.groceryList.push(newItem)

        return this
    }

    removeItem(item) {
        for (let i = 0; i < this.groceryList.length; ++i) {
            if (this.groceryList[i].item.toLowerCase() == item.toLowerCase()) {
                if (this.groceryList[i].quantity > 1) {
                    this.groceryList[i].quantity -= 1
                } else this.groceryList.pop(this.groceryList[i])
            }
        }
        return this
    }

    addPrice(item, price) {
        for (let i = 0; i < this.groceryList.length; ++i) {
            if (this.groceryList[i].item.toLowerCase() == item.toLowerCase()) {
                this.groceryList[i].price = price
            }
        }
        return this;
    }

    addTotal() {
        let total = 0
        for (let i = 0; i < this.groceryList.length; ++i) {
            if (this.groceryList[i].price == "n/a") continue
            for (let j = 0; j < this.groceryList[i].quantity; ++j) {
                total += this.groceryList[i].price
            }
        }
        this.total = Math.round(total * 100) / 100
        return this
    }

    get print() {
        return this.printList()
    }

    printList() {
        for (let i = 0; i < this.groceryList.length; ++i) {
            console.log("Item: " + this.groceryList[i].item + " | " +
                "Quantity: " + this.groceryList[i].quantity + " | " +
                "Price: " + this.groceryList[i].price)
        }
        if (this.total > 0) console.log("Total: " + this.total)

    }
}

const cart = new Grocery()

cart.addItem({
        item: 'bread',
        quantity: '1'
    })
    .addItem({
        item: 'soup',
        quantity: '3'
    })
    .addItem({
        item: 'chips',
        quantity: '4'
    })
    .addItem({
        item: 'soda',
        quantity: '1'
    })
    .addPrice('chiPs', 5.99)
    .removeItem('Chips')
    .addPrice('soda', 1.04)
    .addTotal()
    .print