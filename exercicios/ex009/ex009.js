let res = document.getElementById("res");
let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");
let res4 = document.getElementById("res4")

let educador = ["ITI", "Bianca", "Sharlayne", "Daiane"];

let tema = ["Pacote Office", "Educação Financeira", "Tecnologia", "ADM - Informática"];

function consultar() {

    res.innerHTML = ` <ul> <li> <strong> Educador: </strong> ${educador[0]} </li> <li> <strong> Tema: </strong> ${tema[0]} </li> </ul> `

    res1.innerHTML = ` <ul> <li> <strong> Educador: </strong> ${educador[1]} </li> <li> <strong> Tema: </strong> ${tema[1]}</li> </ul>`

    res2.innerHTML = ` <ul> <li> <strong> Educador: </strong> ${educador[2]} </li> <li> <strong> Tema: </strong>${tema[2]}</li> </ul>`

    res3.innerHTML = `<ul> <li> <strong> Educador: </strong>${educador[2]} </li> <li> <strong> Tema: </strong>${tema[2]}</li> </ul>`

    res4.innerHTML = `<ul> <li> <strong> Educador: </strong>${educador[3]}</li> <li> <strong> Tema: </strong>${tema[3]}</li></ul>`


}