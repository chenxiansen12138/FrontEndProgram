/**
 * 类的定义
 */
class PornStar {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    call() {
        console.log(this.name + '是日本知名女优')
    }
}

let pornstar = new PornStar('白石茉莉奈',35);
pornstar.call();
console.log(pornstar)