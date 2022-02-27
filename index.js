var codigo = ''

var pais = ''
var empresa = ''
var producto = ''
var numCal = ''
var list_Paises = [{
    'clave': '001',
    'pais': 'Estados Unidos'
}, {
    'clave': '020',
    'pais': 'Marcado Minoristas'
}, {
    'clave': '030',
    'pais': 'Francia'
}, {
    'clave': '380',
    'pais': 'Bulgaria'
}, {
    'clave': '383',
    'pais': 'Eslovenia'
}, {
    'clave': '385',
    'pais': 'Croacia '
}, {
    'clave': '387',
    'pais': 'Bosnia y Herzegovina '
}, {
    'clave': '400',
    'pais': 'Alemania '
}, {
    'clave': '045',
    'pais': 'Japón '
}, {
    'clave': '460',
    'pais': 'Rusia'
}, {
    'clave': '471',
    'pais': 'Taiwán'
}, {
    'clave': '489',
    'pais': 'Hong Kong'
}, {
    'clave': '750',
    'pais': 'Mexico'
}]

const updateValue = (e) => {
    codigo = e.target.value;
    console.log(codigo)
}
const entrada = document.getElementById('codigo').addEventListener('change', updateValue, false);

const getValueInput = () => {
    if (verificar()) {
        codigos()
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
    document.getElementById('codigo').value = ''
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
    document.getElementById('codigo').value = ''
}
function agregar_Tabla() {
    var fila = "<tr><td>" + pais + "</td><td>" + empresa + "</td><td> " + producto + "</td><td>" + numCal + "</td></tr> ";
    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablaDatos").appendChild(btn);
    reiniciar()
}
function bloque1(codigoBlock) {
    for (var x in list_Paises) {
        if (codigoBlock == list_Paises[x].clave) {
            pais = list_Paises[x].pais
            console.log(pais)
            return true
        }
    }
    errors(2)
    return false
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