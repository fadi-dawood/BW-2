// copia dei pin destinazione caricare con oggetto
for(let i=0;i<7;i++){
    let clonePin= document.querySelector('div#destPin>div').cloneNode(true);
    document.getElementById('destPin').appendChild(clonePin);
}
//possibili lingue 
let langPin=document.getElementById('langButton');

