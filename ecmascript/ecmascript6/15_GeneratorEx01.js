function one(){
    setTimeout(()=>{
        console.log('田中瞳');
        iterator.next();
    },1000);
}

function two(){
    setTimeout(()=>{
        console.log('森下美绪');
        iterator.next();
    },2000);
}

function three(){
    setTimeout(()=>{
        console.log('田中宁宁');
        iterator.next();
    },3000);
}

function * porn(){
    yield one();
    yield two();
    yield three();
}
let iterator = porn();
iterator.next();
