var kittens = ["Milo", "Otis", "Garfield"] //define your array here
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function  destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}


function appendKitten(name){

 return kittens.concat(name)
//
}
function prependKitten(name){
  var k=[name,...kittens]
  return k
}

function removeLastKitten(){
return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
// Add your functions and code here
