class StringStack {
  #value
  constructor() {
    this.#value = ''
  }

  push(value) {
    this.#value = this.#value + value[0]
    console.log('stack is now', this.#value)
  }

  pop() {
    // Gets the last character.
    const ret = this.#value[this.#value.length - 1]
    // The entire list, minus last character.
    this.#value = this.#value.slice(0, this.#value.length - 1)
    return ret
  }
}

const stack = new StringStack()

stack.push('b')
stack.push('a')
stack.push('r')

console.log('from stack', stack.pop())
console.log('from stack', stack.pop())
console.log('from stack', stack.pop())