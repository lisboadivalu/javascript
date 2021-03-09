document.write("</br> Escolha seu pedido: </br>")

document.write(" 0 - Sorvete  </br>")
document.write(" 1 - Sanduiche </br>")
document.write(" 2 - X Burger </br>")
document.write(" 3 - Milk Shake </br></br>")


function pedir() {
    
    var x = prompt("Digite o numero do seu pedido") 
    
    switch(x) {
        
        case "0":
            alert("Seu pedido foi um sorvete " );
            break;
        
        case "1":
            alert("Seu pedido foi um Sanduiche ");
            break;
        
        case "2":
            alert("Seu pedido foi um X Burger ");
            break;
        
        case "3":
            alert("Seu pedido foi um Milk Shake ");
            break;

        default:
            alert("Este item nao consta no cardapio");    
            break;
    }
}