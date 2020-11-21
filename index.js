var kittens=["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var kitt=[...kittens,name]
  return kitt
}
function prependKitten(name){
  var kitt=[name,...kittens]
  return kitt
}
function removeLastKitten(){
  var kitt=kittens.slice(0,kittens.length-1)
  return kitt
}
function removeFirstKitten(){
  var kitt=kittens.slice(1)
  return kitt
}
