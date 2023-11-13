var player = "";
var playerXImagem = "";
var playerOImagem = "";
var numJogo = 0;

function selectImagemX() {
    playerXImagem = document.getElementById("playerXImagem").value;
    if (playerXImagem !== "") {
        player = playerXImagem;
    }
}

function selectImagemO() {
    playerOImagem = document.getElementById("playerOImagem").value;
}
function checkjogo(id){
    
    var pc = document.getElementById('cpu').checked
    var cell = document.getElementById(id);
    
var opt = verificaSrc(id);

    if(opt == "transp.png"){
        document.getElementById(id).src = "imagem/" + player + ".png";

            if (player == playerXImagem) {
                player = playerOImagem;
            } else {
                player = playerXImagem;
            }
        }
        numJogo++;
        
        
        
        if(winchek()){
            if (player == playerOImagem){alert("Fim de Jogo!! Vitória para o " + playerXImagem + "!")
            return false;
            //location.reload();
            
        }else{
            alert("Fim de Jogo!! Vitória para o " + playerOImagem + "!")
            return false;
            //location.reload();
            }
        }
        if(numJogo >= 9){
            alert("Fim de Jogo!! Empate!");
            return false;
        }

        if(pc && player == playerOImagem){
        checkjogo(jogoDopc());
        }
}  

function verificaSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function jogoDopc(){
    if(verificaSrc('c5') == "transp.png"){
        return 'c5';
    }
    return 'c' + Math.floor((Math.random()*9)+1);
}

function winchek(){

            /* Linha Horizontal */
            if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png"){
                return true;
            }
        
            if((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png"){
                return true;
            }
        
            if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png"){
                return true;
            }
        
            /* Linha Vertical */
        
            if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png"){
                return true;
            }
        
            if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png"){
                return true;
            }
        
            if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png"){
                return true;
            }
        
            /* Linha Diagonal */
            if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png"){
                return true;
            }
        
            if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png"){
                return true;
            }
            return false;
        }