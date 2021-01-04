var ezosuigeneris = '0c28aa73403946a8808fdd97d4cbdfaf';
if(typeof ezosuigeneris != "undefined")
{
    var myDate = new Date();
    myDate.setMonth(myDate.getMonth() + 24);
    document.cookie = "ezosuigeneris=" + ezosuigeneris + ";expires=" + myDate + ";domain="+ezdomain+";path=/";
}

function callezosuigeneris() {
	var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//g.ezoic.net/ezosuigeneris.js";
    document.body.appendChild(s);
}
if(window.attachEvent) {
	window.attachEvent('onload',ezosuigeneris);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            callezosuigeneris();
        };
        window.onload = newonload;
    } else {
        window.onload = ezosuigeneris;
    }
}
