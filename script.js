// let quad = document.querySelectorAll(".quad");

let container = document.querySelector(".container");

let cont = 0;

//Principal
container.addEventListener('click', (e) => {
    let quad = e.target;
    let resultado;

    if (cont <= 8) {
        if (cont % 2 == 0) {
            quad.textContent = "X";
        } else {
            quad.textContent = 'O';
        }

        cont++;

        resultado = chamarFuncoes();

        console.log(resultado);

        if (resultado['resultado']) {
            alert(`Vencedor: ${resultado['vencedor']}`);

            limparCampos();
        }

    } else {
        alert('velha');

        limparCampos();
    }
    

});

function limparCampos() {
    let quad = document.querySelectorAll('.quad');

    quad.forEach((e) => e.textContent = '');

    cont = 0;
}

function chamarFuncoes() {

    //Verifica as Diagonais
    if (verificarDiagonal(1)) {
        return verificarDiagonal(1);
    }

    if (verificarDiagonal(3)) {
        return verificarDiagonal(3);
    }

    //Verifica as Horizontais
    if (verificarHorizontal(1)) {
        return verificarHorizontal(1);
    }

    if (verificarHorizontal(4)) {
        return verificarHorizontal(4);
    }

    if (verificarHorizontal(7)) {
        return verificarHorizontal(7);
    }

    //Verifica as Verticais
    if (verificarVertical(1)) {
        return verificarVertical(1);
    }

    if (verificarVertical(2)) {
        return verificarVertical(2);
    }

    if (verificarVertical(3)) {
        return verificarVertical(3);
    }
}

function verificarHorizontal(id) {
    let quad1 = document.querySelector(`#q${id}`);
    let quad2 = document.querySelector(`#q${++id}`);
    let quad3 = document.querySelector(`#q${++id}`);


    if (quad1.textContent != "" && quad2.textContent != "" && quad3.textContent != "") {
        if (quad1.textContent == quad2.textContent && quad2.textContent == quad3.textContent) {

            return {
                'resultado': true,
                'vencedor': quad1.textContent
            };
        }
    }

    return false;
}

function verificarVertical(id) {
    let casas = 3;

    let quad1 = document.querySelector(`#q${id}`);
    let quad2 = document.querySelector(`#q${id + casas}`);
    let quad3 = document.querySelector(`#q${id + casas*2}`);

    if (quad1.textContent != "" && quad2.textContent != "" && quad3.textContent != "") {
        if ((quad1.textContent == quad2.textContent) && (quad2.textContent == quad3.textContent)) {
            return {
                'resultado': true,
                'vencedor': quad1.textContent
            };
        }
    }
    return false;
}

function verificarDiagonal(id) {
    let casas = 4;

    if (id == 3) {
        casas = 2
    }

    let quad1 = document.querySelector(`#q${id}`);
    let quad2 = document.querySelector(`#q${id + casas}`);
    let quad3 = document.querySelector(`#q${id + casas*2}`);

    if (quad1.textContent != "" && quad2.textContent != "" && quad3.textContent != "") {
        if (quad1.textContent == quad2.textContent && quad2.textContent == quad3.textContent) {
            return {
                'resultado': true,
                'vencedor': quad1.textContent
            }
        }
    }
    
    return false;
}


