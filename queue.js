class Queue {

  elements

  constructor() {
    this.items = []
  }

  enqueue(elements) {
    this.items.push(elements)
  }

  dequeue() {
    if (this.isEmpty()) return undefined

    return this.items.shift()
  }

  peek() {
    if (this.isEmpty()) return undefined
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}


module.exports = Queue