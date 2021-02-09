// kata 1 

var child = function(bird1, bird2) {
  if (bird1 === bird2) return false;
  return getDifference(bird1, bird2) < 3 ? true : false;
};
var grandchild = function(bird1, bird2) {
  if (bird1.length === 1 && bird2.length === 1 && bird2 !== bird1) return false;
  return getDifference(bird1, bird2) <= 4 ? true : false;
};

function getDifference(bird1, bird2) {
  let dif = 0;
  for (let i = 0; i < bird1.length; i++) {
    if (bird1.slice(i, i + 1) !== bird2.slice(i, i + 1)) dif++;
  }
  return dif;
}

// kata 2

const roomMates = (rooms, floor) => rooms.slice(floor * 6 - 6, +floor * 6).filter(v => v);

// kata 3 

const flip = fn => (...args) => fn(...args.reverse());

// kata 4

const findDifference = ([a, b, c], [d, e, f]) => Math.abs(a*b*c - d*e*f);

// kata 5

Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  for (let i=0;i<this.length;i++){
    if (this[0]!==this[i]) return false
  }
  return true
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
  for (let i=0;i<this.length;i++){
    if (this[0]!==this[i]) return false
  }
  return true
} } ); 

// kata 6 

function solve(arr){
   let [x, y, z] = arr.sort((a, b) => a - b);
  return Math.min(x + y, Math.floor((x + y + z) / 2));
}

// solution 2
solve=([a,b,c])=>Math.min(a+b,a+c,b+c,(a+b+c)/2|0)

// kata 7

const rev = xs => { 
  const arr=[];
  xs.map(v=>arr.unshift(v))
  return arr
}

// solution 2 

const rev = a => a.reduce((a, b) => [b, ...a], []);

// kata 8 

function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

// solution 2

scoobydoo = snoopy = {bark: String.bind(1, 'Woof')};

// kata 9

const isLockNessMonster = s => /tree fiddy| three fifty|3.50/.test(s);

// kata 10 

function twentyOne(...arr) {
  let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "1", "A"];
  let deck2 = ["J", "Q", "K"];
  let sum = arr
    .map(v =>
      deck.indexOf(v.slice(0, 1)) > -1
        ? deck.indexOf(v.slice(0, 1)) + 2
        : deck2.indexOf(v.slice(0, 1)) + 2
    )
    .reduce((a, b) => a + b, 0);
  return sum === 21 ? "twenty-one" : sum < 21 ? "less" : "more";
}

// kata 11

const getWeight = name => name
    .split("")
    .reduce(
      (a, v) =>
        a +
        (/[a-z]/.test(v)
          ? v.charCodeAt() - 32
          : /[A-Z]/.test(v)
          ? v.charCodeAt() + 32
          : 0),
      0
    );


// kata 12

function solve(n) {
  let count = 0;
  while (n >= 500) {
    count++;
    n -= 500;
  }
  while (n >= 200) {
    count++;
    n -= 200;
  }
  while (n >= 100) {
    count++;
    n -= 100;
  }
  while (n >= 50) {
    count++;
    n -= 50;
  }
  while (n >= 20) {
    count++;
    n -= 20;
  }
  while (n >= 10) {
    count++;
    n -= 10;
  }
  return n === 0 ? count : -1;
}

// solution 2

const solve=n=>n%10?-1:n?1+solve(n-[500,200,100,50,20,10].filter(x=>x<=n)[0]):0; 

// kata 13

const mapVector = (vector, circle1, circle2) => {
   const [x0, y0] = vector
    const [x1, y1, r1] = circle1
    const [x2, y2, r2] = circle2
    const sc = r2/r1
    const [dx1, dy1] = [x0-x1, y0-y1]
    const [dx2, dy2] = [sc*dx1, sc*dy1]
    return [x2+dx2, y2+dy2];
}
