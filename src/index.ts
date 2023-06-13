// basic types
let id: number = 5;
let company: string = "CatsClub LLC";
let isCat = true;
let x: any = 0; // can be changed to other types
x = "bad cat";

// non primitive
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

// tuple
let tup: [number, string, boolean] = [1, "xuni", true];
let cats: [number, string][];
cats = [
  [1, "xuni"],
  [2, "yuni"],
  [3, "soni"],
];

// unions, multiple defined types
let cid: string | number;
cid = 4;
cid = "5";

// enums, define set of named constants, by defalut values will be 0,1,2,3
enum dir1 {
  Up = 1, // change to 1,2,3,4
  Down,
  Left,
  Right,
}

enum dir2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}
console.log(dir1.Up);
console.log(dir2.Up);

// objects
type Cat = {
  id: number;
  name: string;
};
const cat1: Cat = {
  id: 1,
  name: "henry",
};

// type assertion, explicit tell compiler that we want to treat an entity as different type
let pid: any = 1;
let person_id1 = <number>pid;
let person_id2 = pid as number;

// functions
function add(x: number, y: number): number {
  return x + y;
}
let addResult = add(4, 5);
console.log(addResult);

// void function
function log(message: string | number): void {
  console.log(message);
}
log("laduu");

// interface
interface CatInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const cat3: CatInterface = {
  id: 1,
  name: "thruston",
};
// cat3.id = 2; // readonly, c-err
cat3.name = "waffles";

interface mathFunc {
  (x: number, y: number): number;
}
const addf: mathFunc = (x: number, y: number): number => x + y;
const subf: mathFunc = (x: number, y: number): number => x - y;
console.log(subf(2, 9));

// classes, access modifiiers are public by default
class Person {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
const rakshi = new Person(1, "rakshi");
const laduu = new Person(1, "laduu");
console.log(rakshi, laduu);
console.log(rakshi.register());

// inheritance
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const kanishka = new Employee(3, "kanishka", "dse");
console.log(kanishka);
console.log(kanishka.register());

// generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numArr = getArray([1, 2, 3, 4]);
const strArr = getArray(["rakshi", "ankit"]);
