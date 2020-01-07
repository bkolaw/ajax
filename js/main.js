
function klikanko () {

fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
.then(response =>response.json())
.then(response=>{

    let dane = document.getElementById('dane');

    let imie = document.createElement('p');
    imie.innerText = 'Imie: ' + response.imie;

    let nazwisko = document.createElement('p');
    nazwisko.innerText = 'Nazwisko: ' + response.nazwisko;

    let zawod = document.createElement('p');
    zawod.innerText = 'Zawód: ' + response.zawod;
    
    let firma = document.createElement('p')
    firma.innerText = 'Firma: ' + response.firma;

    let pojemnik = document.createElement('div');
    pojemnik.appendChild(imie);
    pojemnik.appendChild(nazwisko);
    pojemnik.appendChild(zawod);
    pojemnik.appendChild(firma);

    dane.appendChild(pojemnik);
});

};


document.getElementById('pobierz-dane').addEventListener('click', function(){
    klikanko();
})