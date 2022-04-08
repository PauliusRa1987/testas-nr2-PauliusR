console.log('Testas: labas');
//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
const a = 10;
const b = 10;
if (a > b) {
    console.log(`Skaicius ${a} yra didesnis uz skaiciu ${b}`);
}else if (a < b) {
    console.log(`Skaicius ${b} yra didesnis uz skaiciu ${a}`);
}else{
    console.log(`Skaiciai yra lygus`);
}
console.log('-------------2--------------');
//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    const skaiciusDu = i;
    console.log(skaiciusDu);
}
console.log('------------3---------------');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i = 0; i <= 10; i+=2) {
    const kasAntras = i;
    console.log(kasAntras);
}
console.log('----------4-----------------');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (let i = 0; i < 5; i++) {
    const generacijaTrys = 1 + Math.floor(Math.random() * (10 - 1 + 1));
    console.log(generacijaTrys);
}
console.log('---------5------------------');
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
let penktasSkaicius = 0;
while (penktasSkaicius !== 5) {
    penktasSkaicius = 1 + Math.floor(Math.random() * (10 - 1 + 1))
    console.log(penktasSkaicius);
}
console.log('---------6------------------');
///6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
const masyvoIlgis = Math.floor(Math.random() * (30 - 20 + 1) + 20);
let sestasMasyvas = [];
for (let i = 0; i < masyvoIlgis; i++) {
    let reiksmesSesi = 10 + Math.floor(Math.random() * (30 - 10 + 1));
    sestasMasyvas.push(reiksmesSesi);
}
console.log(sestasMasyvas);
console.log('Masyvo ilgis:', sestasMasyvas.length);
let didziausiasSkaicius = 0;
for (let i = 0; i < sestasMasyvas.length; i++) {
    const betKoksSkaicius = sestasMasyvas[i];
    if(betKoksSkaicius > didziausiasSkaicius)
    didziausiasSkaicius = betKoksSkaicius;
}
console.log('Didziausia masyvo reiksme:', didziausiasSkaicius);

console.log('---------7------------------');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
let septintasMasyvas = [];
let duotsRaides = 'MNOP'.split('');
for (let i = 0; i < 25; i++) {
    septintasMasyvas.push(...duotsRaides);    
}console.log(septintasMasyvas);
console.log(septintasMasyvas.length);
console.log(Math.max(septintasMasyvas));   //ERROR :)

console.log('---------7------------------');
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
function lygineSuma(a, b) {
    if (typeof a !== typeof b) {
        return 'Error: abu kintamieji turi buti vienodo';
    }
    if ('' + a === 'NaN' || '' + b === 'NaN') {
        return 'Error: abu kintamieji turi buti skaičiai arba masyvai';
    }
    return 'Abu kintamieji yra tokio pat tipo';
}
console.log(lygineSuma(6, 9));
console.log(lygineSuma([3, 6, 7, 9], [8, 9, 9, 6]));
console.log(lygineSuma(['a', 'b'], 96));
console.log(lygineSuma(Infinity, Infinity)); // bagalybe is dalies yra skaicius... 

console.log('---------8------------------');
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function extraUzdavinys(a, b) {
    if (typeof a !== typeof b) {
        return 'Error: abu kintamieji turi buti vienodo';
    }
    if ('' + a === 'NaN' || '' + b === 'NaN') {
        return 'Error: abu kintamieji turi buti skaičiai arba masyvai';
    }
    if (typeof a === 'number' && typeof b === 'number') {
        if ((a+b)%2 === 0) {
            return a+b;
        }return  'suma nelyginė';
    }
    if (typeof a === 'object' && typeof b === 'object') {
        if ((a.length+b.length)%2 === 0) {
            return a.length+b.length;
        } return 'suma nelyginė';
        
    }
}
console.log(extraUzdavinys(7, 4));
console.log(extraUzdavinys(4, 4));
console.log(extraUzdavinys([3, 6, 7, 9], [8, 9, 9, 6]));
console.log('---------9------------------');
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminisskaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function arPirminis(skaicius) {
    if (skaicius % 1 !== 0) {
        return 'Demesio! skaicius yra desimtainis';
    }
    if (typeof skaicius !== 'number'
        || !isFinite(skaicius)) {
        return 'Demesio! tai nera skaicius';
    }
    if (skaicius < 0) {
        return 'Demesio! skaicius yra minusinis';
    }
    if (skaicius % skaicius === 0 ** skaicius % 1 ===0) {
        return `Pateiktas skaicius ${skaicius} yra pirminis`;
    }
}
console.log(arPirminis(3));
console.log(arPirminis(9));
console.log(arPirminis(9,6));
console.log(arPirminis(9,8));

console.log('---------10------------------');
///10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)
function telefonoNumeris(s8) {
    if (s8.length === 10) {
        return `(${s8[0]}${s8[1]}${s8[2]}) ${s8[3]}${s8[4]}${s8[5]}-${s8[6]}${s8[7]}${s8[8]}${s8[9]}`;
    } else {
        return `truksta arba per daug duomenu`;
    }
}
console.log(telefonoNumeris([6, 3, 8, 4, 6, 7, 9, 5, 4, 2]));
