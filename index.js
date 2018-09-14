//Your code here
function justInvoke(fn) {

}

function setThisWithCall(fn, thisValue, arg) {
  return fn()
};

function setThisWithApply(fn, thisValue, args) {
  return fn.call(thisValue, arg)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {

}
