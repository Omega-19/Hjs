let product = (array) => {
    let tab = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
           tab *= array[i];
           console.log(tab);
        }
    }
    return tab;
}
product([1, 2, 3, 4]);