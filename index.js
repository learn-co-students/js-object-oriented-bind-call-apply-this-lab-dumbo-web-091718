//Your code here

let obect1{proreties: cbCity()}  <-- Methods --> let obect2{proreties: cbCity()}



const obj = {num:2};
const addToThis = function maFunc(a) {
  return this.num + a;
}
console.log(addToThis.call(obj, 3))  // maFunc.call obj && maFunc init arg



const justInvoke = function(fn){
  return fn()
}

const setThisWithCall = function(fn, thisValue, arg){
  return fn.call(thisValue,arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(fnTobeCopied, thisValue){
  let GrandMasCookingFunc =  fnTobeCopied.bind(thisValue)
  return GrandMasCookingFunc
}
