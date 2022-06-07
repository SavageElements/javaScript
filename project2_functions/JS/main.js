var blank1 = document.getElementById ('question').innerHTML

var MB = "Master Blaster"

document.getElementById('daButton').onclick = function() {
   var bingo = blank1;
   bingo += ' ' + MB;
     
    document.getElementById('daAnswer').innerHTML = (bingo);
}


