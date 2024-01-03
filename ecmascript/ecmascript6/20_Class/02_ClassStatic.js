/**
 * 类中标注了static关键字的为静态成员,只属于类,不属于实例对象
 */
class PornStar {
   static name = '白石茉莉奈';
   static info(){
        console.log('日本知名女优');
    }
}

let pornstar = new PornStar();
console.log(pornstar.name);
console.log(PornStar.name);