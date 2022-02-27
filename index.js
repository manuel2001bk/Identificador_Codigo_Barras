var codigo = ''

var pais = ''
var empresa = ''
var producto = ''
var numCal = ''

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var mexico = 750

const updateValue = (e) => {
    codigo = e.target.value;
    console.log(codigo)
}
const entrada = document.getElementById('codigo').addEventListener('change', updateValue, false);

const getValueInput = () => {
    if (verificar()) {
        if (codigos()) {

        }
    }
}

document.getElementById('ingresar').addEventListener('click', getValueInput, false);

function verificar() {
    if (codigo.length === 13) {
        return true
    }
    else {
        errors(1)
        return false
    }
}
const errors = (tipo) => {
    switch (tipo) {
        case 1:
            alert("Debes ingresar un dato Con 13 Digitos")
            break;
        case 2:
            alert("Pais no encontrado")
            break;
        case 3:
            alert("El codigo de la empresa es incorrecto")
            break; 
        case 4:
            alert("El numero del producto es incorrecto")
            break;
        default:
            alert("Imposible poder validar el codigo")
            break;
    }
    document.getElementById('codigo').value=''
}
function codigos() {
    if (bloque1(codigo.substring(0, 3))) {
        if (bloque2(codigo.substring(3, 7))) {
            if (bloque3(codigo.substring(7, 12))) {
                if (bloque4(codigo.substring(12, 13))) {
                    agregar_Tabla()
                }
            }
        }
    }
}
function reiniciar() {
    pais = ''
    empresa = ''
    producto = ''
    numCal = ''
    codigo = ''
    document.getElementById('codigo').value=''
}
function agregar_Tabla() {
    var fila = "<tr><td>" + pais + "</td><td>" + empresa + "</td><td> " + producto + "</td><td>" + numCal + "</td></tr> ";
    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablaDatos").appendChild(btn);
    reiniciar()
}
function bloque1(codigoBlock) {
    if (codigoBlock == mexico) {
        pais = 'Mexico'
        console.log(pais)
        return true
    }
    else {
        errors(2)
        return false
    }
}

function bloque2(codigoBlock) {
    if (codigoBlock != '0000') {
        empresa = codigoBlock
        console.log(empresa)
        return true
    }
    else {
        errors(3)
        return false
    }
}
function bloque3(codigoBlock) {
    if (codigoBlock != '00000') {
        producto = codigoBlock
        console.log(producto)
        return true
    }
    else {
        errors(4)
        return false
    }
}
function bloque4(codigoBlock) {
    if (codigoBlock != null) {
        numCal = codigoBlock
        console.log(numCal)
        return true
    }
    else {
        return false
    }
}