var radios = document.getElementsByName('op');
  for(radio in radios) {
    radios[radio].onclick = function() {
        switch(this.value){
            case '1':
                document.getElementById('cnt1').style.marginTop = '0';
                break
            case '2':
                document.getElementById('cnt1').style.marginTop = '-65.25%';
                break
            case '3':
                document.getElementById('cnt1').style.marginTop = '-130.5%';
                break
            case '4':
                document.getElementById('cnt1').style.marginTop = "-195.5%"
                break
            case '5':
                document.getElementById('cnt1').style.marginTop = "-260.6%";
                break
        }
    }
}