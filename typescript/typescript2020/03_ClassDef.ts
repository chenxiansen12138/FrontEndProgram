/**
 * 使用class关键字定义一个类
 */
class Person {
    //只读属性,无法变更
    readonly name: string;
    age: number;
    //静态属性
    static gender:string='男';

    public Person( age: number) {
        this.age = age;
    }

    sayHello(){
        console.log('hello')
    }
}

let person = new Person();
console.log(Person.gender)