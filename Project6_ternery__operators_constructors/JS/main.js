document.getElementById("Rider").onclick = function () {

    var Height = document.getElementById("Height").value;
    var Can_ride = (Height >= 52) ? "You are tall enough":"You are too short";
    document.getElementById("Ride").innerHTML = (Can_ride + " to ride.");
}

document.getElementById("voter").onclick = function () {

    var age = document.getElementById("age").value;
    var Can_vote = (age >= 18) ? "Rock the Vote!":"Come back later kid!";
    document.getElementById("vote").innerHTML = (Can_vote);
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard Yellow");

function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + ' ' +Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

document.getElementById('daButton').onclick = function() {
    var bingo = quack;
    bingo += ' ' + MB;
      
     document.getElementById('daAnswer').innerHTML = (bingo);
 }

 function VINO(year, vineyard, varietal) {
     this.year= year;
     this.vineyard= vineyard;
     this.varietal= varietal;
 }


var thir = 'THIRTEEN!!!'


document.getElementById("nest").onclick = function decorate (t) {
    {
        var h = '13' + thir + '13';
    }
    {
    var w = '!#' + h + '!#'; 
    document.getElementById("retNest").innerHTML = (w);
    }
}