function numberSplit (number) {
    const half = Math.floor(number / 2);
    const leftHalf = half;
    const rightHalf = number % 2 === 0 ? half : half + 1;

    return [leftHalf, rightHalf];
}

console.log(numberSplit(4));  // [2, 2]
console.log(numberSplit(10)); // [5, 5]
console.log(numberSplit(11)); // [5, 6]
console.log(numberSplit(-9)); // [-5, -4]