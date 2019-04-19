import "./index.css";
import "./index.less";
import "./b.js";
import "@babel/polyfill"
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

function* geter() {
  yield 1;
  yield 2;
}
let test = geter();
console.log(test.next());
console.log(test.next());

console.log(["1", "2", "4"].includes("a"));
