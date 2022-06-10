function callLoop () {
    var x = document.getElementById("loopOne");
    var y = x.toString;
    var z = y().length;

    console.log(y)

    document.getElementById("loopOneRet").innerHTML = (z)
}

function getList (){
    var Wines = ["Charbono", "Cabernet Sauvignon", "Cabernet Franc", "Merlot", "Petit Verdot", "Malbec", "Pinot Noir", "Zinfandel", "Tempranillo"];
    var Content = " ";
    var Y;

        for (Y = 0; Y < Wines.length; Y++ ) {
            Content += Wines[Y] + "<br>";
        }
    document.getElementById("listReturn").innerHTML = (Content);
}

function getNotes () {
    var wineNotes = [];
        wineNotes[0] = "Velevty fruit woody tannic finish.";
        wineNotes[1] = "Deep dark fruit, mild completixy and tannins.";
        wineNotes[2] = "Earthy tones mild tanic finish.";
        wineNotes[3] = "Velevety deep fruit.";
        wineNotes[4] = "Bright red fruit up front strong tannic finish.";
        wineNotes[5] = "mellow fruit, complex finish.";
        wineNotes[6] = "Velvety bright red fruit.";
        wineNotes[7] = "Deep darker fruits, mellow tannins long finish.";
        wineNotes[8] = "Dusty, with hearty red fruit up front.";
        document.getElementById("noteRet").innerHTML = ("This wine is " + wineNotes[8]);
}

function getConst () {
    const wine_bottle = {type: "Zinfandel", year: "2014", Vineyard: "Cherryhouse", size:"750ml"};
        wine_bottle.size= "1.5 L";
        wine_bottle.cost= "$ 95";

    document.getElementById("constRet").innerHTML = ("The cost of " + wine_bottle.Vineyard + ' ' + wine_bottle.type + wine_bottle.size +" is " + wine_bottle.cost);
}

function getLet (){
    let x = "Let there be light";

    document.getElementById("letRet").innerHTML = (x);
}

function returnFun () {
    var x = document.getElementById("name").innerHTML;
    document.getElementById("funRet").innerHTML = ("Hello" + ' ' + x );
}   

function getOrder () {
let wineO = {
    year: "2004",
    vineyard: "II Vintners",
    type: "Make Haste",
    varietal: "Cinsault", 
    description : function (){
        return "Your wine choice is " + this.year + ' ' + this.vineyard + ' ' + this.type + ' ' + this.varietal;
    }
};
    document.getElementById("orderRet").innerHTML = wineO.description();
}

