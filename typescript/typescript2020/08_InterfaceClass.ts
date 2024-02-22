interface myInterface {
    name: string;

    init(): string;
}

class MyInterface implements myInterface {
    private _name: string;
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    private _age: number;

    init(): string {
        return "";
    }

}

let obj = new MyInterface();
obj.name = "haha";
obj.age = 18;
