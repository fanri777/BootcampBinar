Human.prototype.greet = function(name) {
    console.log('Hi, ${name}, Im ${this.name}');   
}
Human.destroy = function (thing) {
    console.log('Human is destroying ${thing}');   
}

let mj = new Human("Michael Jackson", "Isekai");

console.log(mj);

console.log(mj instanceof Human)

mj.greet("Donald Trump");

Human.destroy("Amazon Forest");