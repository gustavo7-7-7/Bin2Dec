let num = /[0-1]$/;

function biToDec() {
    let bi = document.getElementById("bin").value;
    let deci = document.getElementById("deci");
    if (bi.length > 8){
        window.alert('Error: Digite no máximo 8 dígitos');
    } else if (!num.exec(bi)) {
        window.alert('Error: Digite apenas números binários');
    } else {
        deci.value = parseInt(bi, 2).toString(8);
    }
}
