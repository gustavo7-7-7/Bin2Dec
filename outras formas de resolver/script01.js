const biToDec = (binary) => {
    let result = 0;
    let pow = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        let r = Math.pow(2, pow);
        result += r  * parseInt(binary[i], 2);
        pow++
    }
    console.log(result);
}


biToDec("10100101");