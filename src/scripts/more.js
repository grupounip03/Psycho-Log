var btn = document.querySelector("#btnLeiaMais")
var container = document.querySelector(".segunda-section")

btn.addEventListener('click', function () {
    
    if (container.style.display == 'none'){
        container.style.display = 'block';

    } else if (container.style.display = 'block') {
        container.style.display = 'none';
        
    }
})
/*function leiaMais() {
    var pontos = document.getElementById("pontos")
    var mais = document.getElementById("mais")
    var btnLeiaMais = document.getElementById("btnLeiaMais")

    if (pontos.style.display === "none") {
        pontos.style.display="inline";
        mais.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    } else {
        pontos.style.display="none";
        mais.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}*/