let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished: boolean = true;

// type any
let level;
level = 1;
level = ''

console.log(level);

function render(document: any) {
    console.log(document);;
};

let numbers: number[] = [1, 2, 3]; // in this case we could skip the type of the variable
let numbers2: number[] = []; // in this case there is a need of explicit annotation of the type (otherwise it will be any)


// enums (PascalCase)

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size { Small = 1, Medium, Large };

let mySize: Size = Size.Medium;
console.log(mySize);

