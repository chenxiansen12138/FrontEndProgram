/**
 * 在定义函数或类时,如果类型不明确则可以使用泛型
 */

interface MyInter {
    length: number;
}

class generic {
    fn<T>(a: T): T {
        return a;
    }
    // 实现了MyInter的子类
    fn2<T extends MyInter>(a: T): number {
        return a.length;
    }
}