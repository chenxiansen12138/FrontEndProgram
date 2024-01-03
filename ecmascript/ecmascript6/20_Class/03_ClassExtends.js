class AVCompany {
    constructor(companyName, country) {
        this.companyName = companyName;
        this.country = country;
    }

    call() {
        console.log(this.companyName + '有很多女演员')
    }
}

class PornStar extends AVCompany {
    constructor(companyName,country,name, age) {
        super(companyName,country);
        this.name = name;
        this.age = age;
    }
    info(){
        console.log(this.companyName+'有'+this.name+'这样'+this.age+'岁就这么知名的女优可以在AV界大放异彩')
    }
}
let pornstar= new PornStar('东京热事务所','日本','永井玛利亚','28');
pornstar.call();

pornstar.info();