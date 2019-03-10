const adder = (previous = 0, next) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = !next ? `cannot add ${next}` : null
            if(error)
                reject(error)
            else
                resolve(previous + next)
        }, 10)
    })
}

async function iterateNumbers(n){
    let total = 0 
    for(let i = 0; i < n.length; ++i){
        try{
            total = await adder(total, n[i])
        } catch(err){
            console.log(err)
        }
    } 
    console.log("Total:\n" + total)
}

iterateNumbers([1,2,3,5,8,13,21])

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

const checkPriority = (todo, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = !todo.priority ? `Missing Priority [ '${todo.name}' ]` : null
            if(error)
                reject(error)
            else
                resolve(todo)
            callback(error, todo)
        }, 90 || 0)
    })
}

async function makePriorityList (todos){
    let items = []
    let errors = []
    for(let i = 0; i < todos.length; i++){
        const todo = todos[i]
        try{
            const check = await checkPriority(todo, (err, result) => {
            })
            items.push(check)
        }catch(err){
            errors.push(err)
        }
    }
    console.log("Priority")
    console.log(items)
    console.log(errors)
}
makePriorityList(todos)