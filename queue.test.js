const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toBe(0)
    expect(queue.items).toEqual([])
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()

    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()

    queue.enqueue(10)
    queue.enqueue(11)
    queue.enqueue(15)


    expect(queue.items).toEqual([10,11,15])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()

    queue.enqueue(10)
    queue.enqueue(11)
    queue.enqueue(15)

    expect(queue.peek()).toEqual(10)
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()

    queue.enqueue(10)
    queue.enqueue(11)
    queue.enqueue(15)

    queue.dequeue()

    expect(queue.items).toEqual([11,15])
  })
})