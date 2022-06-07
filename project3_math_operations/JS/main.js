var ekks = 7
var wahi = 6
var zee = (ekks + wahi)

document.getElementById('calculate').onclick = function() {
    var zee = (7 + 6);
   
     
    document.getElementById('Math').innerHTML = ('7 + 6 =' +zee);
}

document.getElementById('minuser').onclick = function() {
    var zee = (7 - 6);
   
     
    document.getElementById('mathDeuce').innerHTML = ('7 - 6 =' + zee);

}

document.getElementById('multi').onclick = function() {
    var zee = (7 * 6);
   
     
    document.getElementById('mathTres').innerHTML = ('7 * 6 =' + zee);

}

document.getElementById('divider').onclick = function() {
    var zee = (7 / 6);
   
     
    document.getElementById('mathQuat').innerHTML = ('7 / 6 =' + zee);

}

document.getElementById('muchoAddo').onclick = function() {
    var zee = (7 + 6);
    zee += (7 + 6) + (7 +6);
   
     
    document.getElementById('lottso').innerHTML = ('(7 + 6) + (7 + 6) + (7 + 6) = ' +zee);
}

document.getElementById('modulus').onclick = function() {
    var zee = (7 % 6);
   
     
    document.getElementById('modReturn').innerHTML = ('7 / 6  has a remainder of = ' +zee);
}

document.getElementById('negulator').onclick = function() {
    var zee = (7 + 6);
   
     
    document.getElementById('negReturn').innerHTML = (-zee);
}

document.getElementById('plusOne').onclick = function() {
    var zee = 13;
    zee++;
   
     
    document.getElementById('plusOneReturn').innerHTML = (zee);
}

document.getElementById('minus1').onclick = function() {
    var zee = 13;
    zee--;

   
     
    document.getElementById('minusOneReturn').innerHTML = (zee);
}

document.getElementById('d20').onclick = function() {
    

   
     
    document.getElementById('critical').innerHTML = Math.round((Math.random() * 20+1));
}

document.getElementById('yum').onclick = function() {
    zee = Math.PI    

   
     
    document.getElementById('mmmmmm').innerHTML = (zee);
}