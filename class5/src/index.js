import "./index.css";
import "./index.less";

console.log("first test");
let fn = () => {
  console.log("1111111111111");
};
console.log(fn);

@log
class A {
  a = 1;
}

let a = new A();
console.log(a.a);

function log(target) {
  console.log(target);
}
