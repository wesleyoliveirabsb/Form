var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaDireita =window.document.getElementById("setadir")
var SetaEsquerda =window.document.getElementById("setaesq")
function RolarParaDireita(){
    Leonardo.style ="display:none"
    SetaDireita.style="display:none"
    SetaEsquerda.style="display:flex; "
    Samantha.style="display:flex"
}
function RolarParaEsquerda(){
    Leonardo.style="display:flex"
    Samantha.style="display:none"
    SetaDireita.style="display:flex"
    SetaEsquerda.style="display:none"
}