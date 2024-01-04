//通用暴露
// import * as separate from './01_SeparatelyExposed.mjs';
// import * as uniform from './02_UniformExposd.mjs';
// import * as defaultEx from './03_DefaultExposed.mjs'
// separate.info();
// let name = separate.pornstar.name;
// console.log(name);
// uniform.info();
// console.log(uniform.pornstar.name);
// console.log(defaultEx.default.pornstar);
// defaultEx.default.info();

//解构赋值方式暴露
import {pornstar, info} from "./01_SeparatelyExposed.mjs";
import {pornstar as pornstarNext, info as infoNext} from "./02_UniformExposd.mjs"
console.log(pornstar.name)
info();

console.log(pornstarNext.name);
infoNext()

//简单暴露
import defaultEx from './03_DefaultExposed.mjs';
defaultEx.info();

