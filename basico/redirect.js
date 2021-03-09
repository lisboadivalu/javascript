function modify() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');

    if(texto.length == 0 || texto == null ) {
        alert('Digite Seu Nome Para Prosseguir');
        area.innerHTML = "Bem Vindo...";
    } else {
        area.innerHTML = "Bem Vindo " + texto;
    }; 
}


var x = 0;

while(x < 10) {
    document.write( "</br> o valor de X: " + x);

    x++;
}


document.write("</br></br> o valor de X: "+ x + "</br>");


for(a = 0; a < x; a++) {
    document.write("</br> o valor de A: " + a);
}

var y = 0;

switch(y) {
    
    case 0:
        alert("O Y vale 0!");
        break;
    
    case 1:
        alert("O Y vale 1!");
        break;

    case 2:
        alert("O Y vale 2!");
        break;
        
    case 3:
        alert("O Y vale 3!");
        break;   
}