class Student {
    private name: string;
    private age: number;

    // 构造函数
    //this表示当前实例
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let student = new Student('张三',18);
let student1 = new Student('李四',18);
console.log(student);
console.log(student1)