class balanzas {
    constructor(id, sector, capacidad, tolerancia, fechaCal, fechaVencimiento) {
        this.id = id;
        this.sector = sector;
        this.capacidad = capacidad;
        this.tolerancia = tolerancia;
        this.fechaCal = fechaCal;
        this.fechaVencimiento = fechaVencimiento; 
    }
}
const b01 = new balanzas(01, "Despacho", 100, 5, fecha = new Date(), fecha2 = new Date());
const b02 = new balanzas(02, "Despacho", 100, 5, "Date", "Date");
const b03 = new balanzas(03, "Laboratorio", 100, 5, "Date", "Date");
const b04 = new balanzas(04, "Laboratorio", 100, 5, "Date", "Date");
const b05 = new balanzas(05, "Laminación", 100, 5, "Date", "Date");
const b06 = new balanzas(06, "Laminación", 100, 5, "Date", "Date");
const b07 = new balanzas(07, "Aceria", 100, 5, "Date", "Date");
const b08 = new balanzas(08, "Aceria", 100, 5, "Date", "Date");
const b09 = new balanzas(09, "Coqueria", 100, 5, "Date", "Date");
const b10 = new balanzas(10, "Sinterizado", 100, 5, "Date", "Date");

const Equipos = [b01, b02, b03, b04, b05, b06, b07, b08, b09, b10];

let enCalibracion = [];

if(localStorage.getItem("enCalibracion")){
    enCalibracion = JSON.parse(localStorage.getItem("enCalibracion"));
}

const contenedorEquipos = document.getElementById("contenedorEquipos");
//mostrar

const listaEquipos = () => {
    Equipos.forEach( balanzas => {
        const card = document.createElement("div");
        card.classList.add("col-xl-6", "col-md-6", "col-xs-6");
        card.innerHTML = `
              <div class="card">
                    <div class= "card-body">
                        <h5>${balanzas.id}</h5>
                        <h5>${balanzas.sector}</h5>
                        <h5>${balanzas.capacidad}</h5>
                        <h5>${balanzas.tolerancia}</h5>
                        <h5>${balanzas.fechaCal}</h5>
                        <h5>${balanzas.fechaVencimiento}</h5>
                        <button  id="boton${balanzas.id}" > Calibrar </button>
                    </div>
                </div>
                        `
        contenedorEquipos.appendChild(card);      
    });

//Creo la función
const boton = document.getElementById(`boton${balanzas.id}`);
boton.addEventListener("click", () => {
    console.log("algo");
});

};
listaEquipos();