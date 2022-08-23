function biToDec(str) {
    const input = String(str);
    const binary = String(str)
      .split('') //quebrar string em substrings
      .filter((i) => i === "1" || i === "0");
    
    if  (input.length !== binary.length) { //apos filtrar se o comprimento der diferente quer dizer que tem valores no input != de 0 ou 1
        return 'Invalid input';
    } 
    /*
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
        result += Number(binary[i]) * Math.pow(2, binary.length - 1 - i);
    }
    return result;  equivalente ao reduce*/
    return binary.reduce((acc, curr, index, arr)  => {
        return acc += Number(curr) * Math.pow(2, arr.length - 1 - index);
    }, 0);
}

console.log(biToDec(12));