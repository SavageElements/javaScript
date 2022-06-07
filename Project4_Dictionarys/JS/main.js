
document.getElementById('Dictionary').onclick=function My_dictionary () { //desitination when button is clicked
    var wine = {                      // the wine list
        ZIN : "Zinfandel",            // really the list could stop here
        CHA : "Chardonnay",
        PET : "Petite Sirah",
        CAB : "Casbernet Sauvignon",
        PIN : "Pinot Noir",
        NEB : "Nebbiolo", 
        MER : "Merlot"                // Notice there is no merlot
    };
    delete wine.MER;
    document.getElementById("youRang").innerHTML = wine.MER;
}