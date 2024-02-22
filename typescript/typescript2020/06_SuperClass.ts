class SuperClass {
    constructor(name: string) {
        this.name = name;
    }

    name: string;
}

class ClassName extends SuperClass {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;

    }

}