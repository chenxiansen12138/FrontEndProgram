/**
 * 动态导入
 * @type {{name: string, age: string, info(): void}}
 */
const porn = {
    name: '白石茉莉奈',
    age: '38',
    info() {
        import('./02_Information.mjs').then(module=>{
            module.information();
        })
    }
}

porn.info();