function capToFront(word) {
    const capitals = word.match(/[A-Z]/g);
    const lowercase = word.match(/[a-z]/g);

    if (capitals && lowercase) {
        return capitals.join('') + lowercase.join('');
    } else {
        return word;
    }
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))