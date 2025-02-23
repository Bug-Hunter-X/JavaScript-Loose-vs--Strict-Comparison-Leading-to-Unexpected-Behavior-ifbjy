function foo(x){
  if(x===null)return "null";
  if(x===undefined)return "undefined";
  return x.toString();
}
console.log(foo(null));//null
console.log(foo(undefined));//undefined
console.log(foo(1));//1
console.log(foo({}));//[object Object]
console.log(foo([]));//[object Object]