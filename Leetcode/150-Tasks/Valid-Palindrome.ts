
const s: string = "ab_a";


const isPalindrome = (s: string): boolean => {
  let isPalindrome:boolean = false;
  const string: string = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  if (string.length === 0 || (string.length === 2 && string[0] === string[1])) {
    isPalindrome = true;
  }
  if (string.length % 2 !== 0) {
    const firstPart: string = string.slice(0, Math.floor(string.length / 2));
    const secondPart: string = string.slice(Math.ceil(string.length / 2)).split('').reverse().join('');
    if (firstPart === secondPart) {
      isPalindrome = true;
    }
  } else {
    const firstPart: string = string.slice(0, string.length / 2);
    const secondPart: string = string.slice(string.length / 2).split('').reverse().join('');
    if (firstPart === secondPart) {
      isPalindrome = true;
    }
  }
  return isPalindrome;
}

console.log(isPalindrome(s))


