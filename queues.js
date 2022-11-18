const queue = []

queue.push(10) // [ 10 ]
queue.push(20) // [ 10, 20 ]
queue.push('cat') // [ 10, 20, 'cat' ]
queue.push('dog') // [ 10, 20 , 'cat', 'dog']
console.log(queue)

const item = queue.shift() // [ 20 ]
console.log('item', item, 'queue', queue)

let dequeued
while((dequeued = queue.shift()) != null) {
  console.log(dequeued)
}