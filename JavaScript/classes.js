//define a class
class Person {
  }
  const person = new Person()
  console.log(person)

  //constructor
  class Person2 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person2 = new Person2()
  
  console.log(person)
