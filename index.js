const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat(){
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.splice(2,3);
}

function destructivelyRemoveFirstCat() {
  cats.splice(0,1);
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0,cats.length-1);
}

function removeFirstCat() {
  return cats.slice(1);
}
