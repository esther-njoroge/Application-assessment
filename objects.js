const student = {
    name: 'Nancy',
    age: 20,
    introduction: function() {
      return `Hello, my name is ${this.name}.`;
    }
  };
  console.log(student.name);
  console.log(student.introduction());
  