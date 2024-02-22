class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
    sayHello(){
        console.log("动物在叫")
    }
    test(){
        console.log(this.name)
    }
}

class Dog extends Animal{

    bark(){
        console.log(this.name+"汪汪汪")
    }
    //子类覆盖父类方法
    sayHello() {
        console.log("哈哈哈哈")
    }
}

let dog = new Dog("狗",3);
console.log(dog);
dog.bark();
dog.sayHello();
dog.test();


