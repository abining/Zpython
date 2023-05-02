class Animal {
    name: string;
    age:number;
    constructor(name: string,age:number) {
      this.name = name;
      this.age=age;
    }
  
    move(distance: number = 0) {
      console.log(`${this.name} 走了${distance} 米.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log('旺旺汪');
    }
  }
  
  const dog = new Dog('RealFun的小狗',2);
  dog.bark();
  dog.move(10); 
  console.log(dog);
  console.log(Animal);
  console.log(typeof(Animal));