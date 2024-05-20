function rot13(str) {
 return str.replace(/[A-Z]/g, function(char) {
    let code = char.charCodeAt(0);
    let amb = code <= 77 ? +13 : -13;
     return String.fromCharCode(code + amb)
 });
}

console.log(rot13("SERR PBQR PNZC")); 
