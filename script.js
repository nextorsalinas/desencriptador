const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            const regex = new RegExp(matrizCodigo[i][0], 'g');
            stringEncriptada = stringEncriptada.replace(regex, matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            const regex = new RegExp(matrizCodigo[i][1], 'g');
            stringDesencriptada = stringDesencriptada.replace(regex, matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}
function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para móviles

    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert("Haz copiado el texto");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
