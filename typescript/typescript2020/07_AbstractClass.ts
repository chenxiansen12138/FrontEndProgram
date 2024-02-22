/**
 * abstract关键字开头的类为抽象类,不能实例化对象,只能被其他类继承
 * 抽象类中的抽象方法必须被子类重写
 */
abstract class Father{
    name:string;
    abstract sayHello();
}

class Son extends Father{
    sayHello() {
    }

}