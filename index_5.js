

let checkNbr = (a) => {
    if (a % 3 === 0 || a % 5 === 1) {
        console.log("Hello");
    }
    if (a % 5 === 0 || a % 3 === 1) {
        console.log("World");
    }
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("Hello world");
    }
}
checkNbr(3);