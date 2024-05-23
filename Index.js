const App = require('./App')

App.createUser("Wesleyramox258@gmail.com", "Wesley Ramos")
App.createUser("Wesley@gmail.com", "Wesley Ferreira")

App.deposit("Wesleyramox258@gmail.com", 100)

App.transfer("Wesleyramox258@gmail.com", "Wesley@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("Wesley@gmail.com", 2000, 24)

console.log(App.findUser("Wesleyramox258@gmail.com"))
console.log(App.findUser("Wesleyramox258@gmail.com").account)

console.log(App.findUser("Wesley@gmail.com"))
console.log(App.findUser("Wesley@gmail.com").account)
console.log(App.findUser("Wesley@gmail.com").account.loans[0].installments)