const rok_vyroby = document.getElementById('rok');
const znacka = document.getElementById('znacka');
const model = document.getElementById('model');
const najete_km = document.getElementById('najeteKm');
const add = document.getElementById('submitAdd');
const remove = document.getElementById('submitDelete');
const select = document.getElementById('viewAll');

class Auto {
  constructor(rok_vyroby, znacka, model, najete_km) {
      this.znacka = znacka;
      this.model = model;
      this.rok_vyroby = rok_vyroby;
      this.najete_km = najete_km;
  }
}

class Autoservis{
    constructor(nazev, auta){
        this.auta = new Array(auta);
        this.nazev= nazev;
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

const autoservis = new Autoservis('LolServis');

add.addEventListener('click', function(){
    let auto = new Auto(znacka.value, model.value, rok_vyroby.value, najete_km.value);
    autoservis.AddAuto(auto);
});

remove.addEventListener('click', function(){
    let auto = new Auto(znacka.value, model.value, rok_vyroby.value, najete_km.value);
    autoservis.DeleteAuto(auto);
});

select.addEventListener('click', function(){
    autoservis.SelectAll();
});
