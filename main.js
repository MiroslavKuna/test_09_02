const rok_vyroby = document.getElementById('rok');
const znacka = document.getElementById('znacka');
const model = document.getElementById('model');
const najete_km = document.getElementById('najeteKm');

const add = document.getElementById('submitAdd');
const remove = document.getElementById('submitDelete');
const select = document.getElementById('viewAll');

const showCars = document.getElementById('showCars');

class Auto {
  constructor(rok_vyroby, znacka, model, najete_km) {
      this.znacka = znacka;
      this.model = model;
      this.rok_vyroby = rok_vyroby;
      this.najete_km = najete_km;
  }
  ToString(){
        return this.znacka + ' ' + this.model + ' ' + this.rok_vyroby + ' ' + this.najete_km;
  }
}

class Autoservis{
    constructor(nazev, auta){
        this.nazev= nazev;
        this.auta = new Array(auta);
    }

    SelectAll(){
        console.log(this.auta);
    }

    AddAuto(auto){
        this.auta.push(new Auto(auto.znacka, auto.model, auto.rok_vyroby, auto.najete_km));
    }

    DeleteAuto(auto){
        this.auta.splice(this.auta.indexOf(auto), 1);
    }
}

const autoservis = new Autoservis('LolServis', 'auta');

add.addEventListener('click', function(){
    let auto = new Auto(znacka.value, model.value, rok_vyroby.value, najete_km.value);
    localStorage.setItem(new Array(),auto);
    autoservis.AddAuto(auto);
});

remove.addEventListener('click', function(){
    let auto = new Auto(znacka.value, model.value, rok_vyroby.value, najete_km.value);
    localStorage.removeItem("automobil",auto.ToString());
    autoservis.DeleteAuto(auto);
});

select.addEventListener('click', function(){
    autoservis.SelectAll();
    let array = autoservis.auta;
    array.forEach(array => {
        showCars.innerHTML += autoservis.auta;
    });

});
