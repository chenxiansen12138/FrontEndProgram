/**
 * 私有属性
 */
class PornStar{
    name;
    #age;
    #isMarried;
    constructor(name,age,isMarried) {
        this.name = name;
        this.#age = age;
        this.#isMarried = isMarried;
    }
    info(){
        console.log(this.name,this.#age,this.#isMarried);
    }
}


const porn = new PornStar('白石茉莉奈','38',true);

porn.info();
console.log(porn.name);
// console.log(porn.#age);
// console.log(porn.#isMarried);