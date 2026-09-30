const layar = document.getElementById("layarMultimeter");
const tombolUkur = document.getElementById("tombolUkur");
const knop = document.getElementById("selectorKnob");
const modeSekarang = document.getElementById("modeSekarang");
const teganganInput = document.getElementById("teganganPSU");

const modeMultimeter = [
    "OFF",
    "DCV 20V",
    "DCV 200V",
    "ACV",
    "Ω"
];

let posisiMode = 0;



function perbaruiMode() {

    const mode = modeMultimeter[posisiMode];

    modeSekarang.textContent = "Mode: " + mode;

    if (mode === "OFF") {
        layar.textContent = "0.00";
        tombolUkur.disabled = true;
    } else {
        tombolUkur.disabled = false;
    }
}



knop.addEventListener("click", function() {

    posisiMode++;

    if (posisiMode >= modeMultimeter.length) {
        posisiMode = 0;
    }

    const sudut = posisiMode * 72;

    knop.style.transform = "rotate(" + sudut + "deg)";

    perbaruiMode();

});



tombolUkur.addEventListener("click", function() {

    const mode = modeMultimeter[posisiMode];

    const teganganPSU = Number(teganganInput.value);


    
    if (mode === "DCV 20V") {

        if (teganganPSU > 20) {
            layar.textContent = "OVER";
        } else {
            layar.textContent = teganganPSU.toFixed(2);
        }

    }


    
    else if (mode === "DCV 200V") {

        if (teganganPSU > 200) {
            layar.textContent = "OVER";
        } else {
            layar.textContent = teganganPSU.toFixed(1);
        }

    }


    
    else if (mode === "ACV") {

        layar.textContent = "AC";

    }


    
    else if (mode === "Ω") {

        layar.textContent = "OL";

    }

});



perbaruiMode();


const jarumAnalog = document.getElementById("jarumAnalog");
const tombolAnalog = document.getElementById("tombolAnalog");
const rangeAnalog = document.getElementById("rangeAnalog");
const teganganAnalog = document.getElementById("teganganAnalog");
const hasilAnalog = document.getElementById("hasilAnalog");

tombolAnalog.addEventListener("click", function() {

    const range = Number(rangeAnalog.value);
    const tegangan = Number(teganganAnalog.value);


 

    if (tegangan > range) {

        jarumAnalog.style.transform = "rotate(90deg)";

        hasilAnalog.textContent =
            "OVER! Range terlalu kecil untuk tegangan " +
            tegangan + " V.";

        return;
    }


   

    const nilaiSkala = (tegangan / range) * 50;




    const sudut = -90 + (nilaiSkala / 50) * 180;


    jarumAnalog.style.transform =
        "rotate(" + sudut + "deg)";


    if (range === 50) {

        hasilAnalog.textContent =
            "Jarum menunjukkan " +
            nilaiSkala.toFixed(0) +
            " pada skala 0–50 → Hasil: " +
            tegangan +
            " V.";

    } else if (range === 250) {

        hasilAnalog.textContent =
            "Jarum menunjukkan " +
            nilaiSkala.toFixed(1) +
            " pada skala 0–50. Karena range 250 V, " +
            "nilai skala dikalikan 5 → Hasil: " +
            tegangan +
            " V.";

    } else {

        hasilAnalog.textContent =
            "Jarum menunjukkan " +
            nilaiSkala.toFixed(1) +
            " pada skala → Hasil: " +
            tegangan +
            " V.";
    }

});




