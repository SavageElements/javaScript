var MB = "Master Blaster"

document.getElementById('butt1').onclick = function() {
   var bingo = 'Who runs Bartertown?'
   var answ= bingo + ' ' + MB + ' runs Bartertown!';
     
    document.getElementById('b1').innerHTML = (answ);
}

document.getElementById('time1').onclick = function() {

    if (new Date().getHours() <= 4) {
        document.getElementById('t1').innerHTML = ('Man! you are up late!');
    }
     
    if (new Date().getHours() >= 5 <=20) {
        document.getElementById('t1').innerHTML = ('How is your day going?');
    }
    
    {
    if (new Date().getHours() >= 21) 
        document.getElementById('b1').innerHTML = ('Man! you are up late!');
    }
 }

 document.getElementById("luck").onclick = function () {

    var number = document.getElementById("number").value;
    if (number = 3) {
        document.getElementById('luckyGuess').innerHTML = ('Lucky Guess!');
    }

    var number = document.getElementById("number").value;
    if (number != 3) {
        document.getElementById('luckyGuess').innerHTML = ('Sorry Sucker!');
    }
 }

 document.getElementById("luck2").onclick = function () {

    var numbs = document.getElementById("number2").value;
    if (numbs == 9) {
        document.getElementById('luckyGuess2').innerHTML = ('Lucky Guess!');
    }
    else {
        document.getElementById('luckyGuess2').innerHTML = ('Sorry Sucker!');
    }
 }


 document.getElementById("rightNow").onclick = function () {
     var Time = new Date ().getHours();
     var Reply;
     if (Time == 1, 23) {
         Reply = 'Right about MIDNIGHT!'; 
     }
     else if (Time >1 == Time<= 11) {
         Reply = 'Damn it is early!';
     }

     else (Time >12 == Time < 23) 
            {
              Reply = "Ya Know, just normal buisness hours round here!"
     }
     document.getElementById('rightAnswer').innerHTML = (Reply);
 }