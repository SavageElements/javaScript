document.getElementById("butt1").onclick = function () {
    var a= "99 bottles of beer on the wall!"
    var b= "99 bottles of beer!"
    var c= "Take one down, pass it around..."
    var d= a + ' ' + b + ' ' + c;
    document.getElementById("back1").innerHTML = (d);
}

document.getElementById("slicer").onclick = function () {
    var y ='A section of words to be sliced up and diced.';
    var z = y.slice (10,18);

    document.getElementById("setRet").innerHTML = (z);
}

document.getElementById("wish").onclick = function (t) {
    {
        var h = document.getElementById("small").innerHTML;
    }
    {
    var w = h.toUpperCase(); 
    document.getElementById("bigger").innerHTML = (w);
    }
}

document.getElementById("getPink").onclick = function (t) {
    {
        let text = document.getElementById("pink").innerHTML;
        var position = text.search("Pink");
    }
    {
     
    document.getElementById("Pink").innerHTML = (position);
    }
}

document.getElementById("stringMe").onclick = function (t) {
    {
        var h = document.getElementById("int").innerHTML;
    }
    {
    var w = h.toString(); 
    document.getElementById("asString").innerHTML = (w);
    }
}

document.getElementById("rounder").onclick = function () {
    {
        var h = document.getElementById("int2").innerHTML;
    }
    {
        var w = Number(h);
        var z = w.toPrecision(6); 
    document.getElementById("rounded").innerHTML = (z);
    }
}

document.getElementById("butt2").onclick = function () {
    {
        var h = document.getElementById("fix").innerHTML;
    }
    {
        var w = h.fixed(); 
    document.getElementById("fixeded").innerHTML = (w);
    }
}

document.getElementById("ePrime").onclick = function (t) {
    var h = document.getElementById("eOne");
    var z = h.valueOf();

    document.getElementById("eRet").innerHTML = (z);
}