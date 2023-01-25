var radios = document.getElementsByName('op');
  for(radio in radios) {
    radios[radio].onclick = function() {
        switch(this.value){
            case '1':
                document.getElementById('cnt1').style.opacity = '1';
                document.getElementById('cnt1').style.visibility = 'visible';
                break
            case '2':
                document.getElementById('cnt1').style.opacity = '0';
                document.getElementById('cnt1').style.visibility = 'hidden';
                document.getElementById('cnt2').style.opacity = '1';
                document.getElementById('cnt2').style.visibility = 'visible';
                break
            case '3':
                document.getElementById('cnt1').style.opacity = '0';
                document.getElementById('cnt1').style.visibility = 'hidden';
                document.getElementById('cnt2').style.opacity = '0';
                document.getElementById('cnt2').style.visibility = 'hidden';
                document.getElementById('cnt3').style.opacity = '1';
                document.getElementById('cnt3').style.visibility = 'visible';
                break
            case '4':
                document.getElementById('cnt1').style.opacity = '0';
                document.getElementById('cnt1').style.visibility = 'hidden';
                document.getElementById('cnt2').style.opacity = '0';
                document.getElementById('cnt2').style.visibility = 'hidden';
                document.getElementById('cnt3').style.opacity = '0';
                document.getElementById('cnt3').style.visibility = 'hidden';
                document.getElementById('cnt4').style.opacity = '1';
                document.getElementById('cnt4').style.visibility = 'visible';
                break
            case '5':
                document.getElementById('cnt1').style.opacity = '0';
                document.getElementById('cnt1').style.visibility = 'hidden';
                document.getElementById('cnt2').style.opacity = '0';
                document.getElementById('cnt2').style.visibility = 'hidden';
                document.getElementById('cnt3').style.opacity = '0';
                document.getElementById('cnt3').style.visibility = 'hidden';
                document.getElementById('cnt4').style.opacity = '0';
                document.getElementById('cnt4').style.visibility = 'hidden';
                document.getElementById('cnt5').style.opacity = '1';
                document.getElementById('cnt5').style.visibility = 'visible';
                break
        }
    }
}


var txt = document.getElementById("email-txt").textContent.trim()
function copiar() {
    navigator.clipboard.writeText(txt)
}

function enviar(){
    var email = txt
    var assunto = "Vi seu site de portifolio hospedado no github e resolvi entrar em contato";
    var corpo = document.getElementById("text-email").value
    window.open("mailto:" + email + "?subject=" + assunto + "&body=" + corpo);
}