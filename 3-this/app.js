function hello() {
  console.log(this);
  console.log(this === global); //true
}

class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log(this);
  }
}

const a = new A(1); // this는 { num: 1 } 로 출력됨

console.log(this); // {}

console.log(this === module.exports); // true
