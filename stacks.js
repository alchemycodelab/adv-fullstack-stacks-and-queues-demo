[   // [ 
  [ // [, [
    [ // [, [, [
      [ // [, [, [, [

      ] // [, [, [
    ] // [, [
  ] // [
] //

const input = '{ foo: "bar", baz: [1, 2, 3] }'

// Implementation not complete here.
const parse = (string, tokenStack) => {
  for(let i = 0; i < string.length, ++i) {
    if(string[i] == '{') {
      tokenStack.push({ type: 'object', fields: [] })
    } else if(string[i] == '[') {
      tokenStack.push({ type: 'array', values: [] })
    } else {
      const currentItem = tokenStack[tokenStack.length - 1]
      if(currentItem.type == 'object') {
        if(string[i].match(/A-Za-z/)) {
          tokenStack.push({ type: 'field-name', name: ''})
        }
      } else if (currentItem.type == 'field-name') {
        if(string[i] == ':') {
          const field = tokenStack.unshift()
        } else {
          currentItem.name += string[i]
        }
      }
    }
  }
}