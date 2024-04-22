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
}
