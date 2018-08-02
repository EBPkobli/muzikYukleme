var aci;
var yukleniyor;
var sayac;
var paragraf;
var sarkilar = [];
var toplamSarki;
function setup() {
  
    createCanvas(500,500);
    aci=0;
    sayac=0;
    yukleniyor=true;
    toplamSarki = 3;

    for(var i = 1;i<=toplamSarki;i++)
    {
        soundYukleme('sarkilar/sarki'+i+'.mkv')
    }

}

function draw() {
    background(51);

    if(yukleniyor)
    {
        stroke(255);
        strokeWeight(2);
        noFill();
        rect(10,10,300,10);

        noStroke();
        fill(255,150);
        var w= 300*sayac/toplamSarki;
        rect(10,10,w,8);

        translate(width/2,height/2);
        rotate(aci);
        stroke(255);
        strokeWeight(4);
        line(0,0,200,0);
        aci += 0.1;
    }
    else{
        background(0,255,0);
        paragraf = createP("BAŞARILI");
        paragraf.position(230, 230);
        paragraf.style("color","red");
			
    }
}

function soundYukleme(dosyaAdi)
{

    loadSound(dosyaAdi,soundYuklendi);

    function soundYuklendi(muzik)
    {
        console.log(dosyaAdi);
        sarkilar.push(muzik);
        sayac++;

        if(sayac==toplamSarki)
        {
            yukleniyor=false;
			sarkilar[0].play();
        }
    }
}