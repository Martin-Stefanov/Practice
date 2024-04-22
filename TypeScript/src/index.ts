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


function calculateTax(income: number, taxYear?: number): number { // optional parameter

    if ((taxYear || 2022) < 2022) { // (taxYear || 2022) is needed, otherwise taxYear will be undefined when not passed as an argument
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTax(10_000, 2022);


function calculateTax2(income: number, taxYear = 2022): number { // default value (better approach)

    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTax(10_000, 2022);

// type alias !
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => console.log(date)
};
employee.name = 'Mosh';


// union
function kgToLbs(weight: number | string) {
    // Narrowing
    if(typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10kg");

