/**
 * 类里的Getter和Setter方法
 */
class PornStar {
    _name;
    _age;

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

let porn = new PornStar();
porn.name = '永井玛丽亚';
porn.age = '26';
console.log(porn.name);
