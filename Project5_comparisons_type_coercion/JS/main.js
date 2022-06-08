document.getElementById ("nope"). onclick = function () {
    var A = ('10' + 3)
    document.getElementById('blank').innerHTML = (A);
}

document.getElementById ("butOne"). onclick = function () {
    var A1 = 0/0;
    document.getElementById('b1a').innerHTML = (A1);
}

document.getElementById ("butToo"). onclick = function () {
    var A2 = isNaN ('This is a string');
    document.getElementById('b2a').innerHTML = (A2);
}

document.getElementById ("butTree"). onclick = function () {
    var A3 = isNaN ('007')
    document.getElementById('b3a').innerHTML = (A3);
}

document.getElementById ("big"). onclick = function () {
    var A4 = (2E310)
    document.getElementById('b4a').innerHTML = (A4);
}

document.getElementById ("small"). onclick = function () {
    var A5 = (-3E310);
    document.getElementById('b5a').innerHTML = (A5);
}

document.getElementById ("boo1"). onclick = function () {
    var A6 = (13>1);
    document.getElementById('b6a').innerHTML = (A6);
}

document.getElementById ("boo2"). onclick = function () {
    var A7 = (13<1);
    document.getElementById('b7a').innerHTML = (A7);
}

console.log (10+3)
console.log (13<1)

document.getElementById ("True Dat"). onclick = function () {
    var A8 = (13==13);
    document.getElementById('b8a').innerHTML = (A8);
}

document.getElementById ("False Dat"). onclick = function () {
    var A9 = (13==1);
    document.getElementById('b9a').innerHTML = (A9);
}

document.getElementById ("Yup"). onclick = function () {
    var x = (13);
    var y = (13);
    var A10 = (x === y)
    document.getElementById('b10a').innerHTML = (A10);
}

document.getElementById ("No"). onclick = function () {
    var x = (13);
    var y = ('1');
    var A11 = (x === y)
    document.getElementById('b11a').innerHTML = (A11);
}

document.getElementById ("Noo"). onclick = function () {
    var x = (13);
    var y = ('13');
    var A12 = (x === y)
    document.getElementById('b12a').innerHTML = (A12);
}

document.getElementById ("Nooo"). onclick = function () {
    var x = ('13');
    var y = ('1');
    var A13 = (x === y)
    document.getElementById('b13a').innerHTML = (A13);
}

document.getElementById ("dBoo1"). onclick = function () {
    var A14 = (13>1 && 13>3)
    document.getElementById('b14a').innerHTML = (A14);
}

document.getElementById ("dBoo2"). onclick = function () {
    var A15 = (13<1 && 13>3)
    document.getElementById('b15a').innerHTML = (A15);
}

document.getElementById ("dBoo3"). onclick = function () {
    var A16 = (13<1 || 13>3)
    document.getElementById('b16a').innerHTML = (A16);
}

document.getElementById ("dBoo4"). onclick = function () {
    var A17 = (13<1 || 13<3)
    document.getElementById('b17a').innerHTML = (A17);
}

document.getElementById ("yupp"). onclick = function () {
    var A18 = !(13<1)
    document.getElementById('b18a').innerHTML = (A18);
}

document.getElementById ("noppe"). onclick = function () {
    var A19 = !(13>1)
    document.getElementById('b19a').innerHTML = (A19);
}