const app = require('./test')

console.assert(typeof app === 'object', 'err')
console.log(app)
console.assert(typeof app.name === 'string', 'err')