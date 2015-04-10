
var jay=document.body.innerHTML.match(/(?=["]*)dytext[\w-]*(?=["]*(>|\s))/gi);
var jayLen=jay.length;
var dynatext={


    add:function() {

        for (var k = 0; k < jayLen; k++) {
            this["name" + k] = [document.getElementById([jay[k]])];
            this["name" + k].push(this["name" + k][0].innerHTML);
            this["name" + k].push(jay[k]);


        }
    },ad:function() {
        var a=2000;
        for (var k = 0; k < jayLen; k++) {
            if(this["name" + k][2].match(/((?=\w[-]*)(\d)+)$/gi)!=null) {
                a = this["name" + k][2].match(/((?=\w[-]*)(\d)+)$/gi)[0];
                this["name" + k].push(parseInt(a));
            }
        }
    }
};

dynatext.add();
dynatext.ad();
for(var k=0;k<jayLen;k++){
    dynatext["name"+k][0].style.visibility="hidden";
}
function dynaPower(){
    for(var k=0;k<jayLen;k++){
        dynatext["name"+k][0].style.visibility="visible";

        if(dynatext["name"+k][3]==undefined){dynatext["name"+k][3]=2000;}
        puissance(dynatext["name"+k][1],dynatext["name"+k][2],dynatext["name"+k][3]);
    }
}

dynaPower();


function puissance(text,im,vit) {
    document.getElementById(im).innerHTML="";
    var d = [""];

    a = document.getElementById(im);


    for (k = 0; k < text.length; k++) {

        if (text.charAt(k)=="<" )
        {
            d.push(text.charAt(k)+text.charAt(k+1)+text.charAt(k+2)+text.charAt(k+3));
            k+=3;

        }else{
            d.push(text.charAt(k));
        }

    }

    var ch = text.charAt(k);
    var content = document.createTextNode(ch);
    vitesse=vit;

    for (var i = 0; i < d.length; i++) {
        if ( d[i]=="§") {
            /*setTimeout(function (a, b) {

             document.getElementById("text1").innerHTML += a[b];
             }, vitesse += 800, d, i);
             } */
            setTimeout(function () {
                var a = document.getElementById(im);
                a.innerHTML = a.innerHTML.substr(0,a.innerHTML.length-1);
            }, vitesse += 80); }
        else if ( d[i]==".") {
            setTimeout(function (a, b) {

                document.getElementById(im).innerHTML += a[b];
            }, vitesse += 400, d, i);


        } else if ( d[i]==",") {
            setTimeout(function (a, b) {

                document.getElementById(im).innerHTML += a[b];
            }, vitesse += 200, d, i);


        }

        else {
            setTimeout(function (a, b) {
                document.getElementById(im).innerHTML += a[b];
            }, vitesse += 40, d, i);
        }
    }
}
