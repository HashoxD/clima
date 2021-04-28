import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  constructor() { }
  
  climas = [
    {
      "region": "Valparaíso",
      "clima": [
            {
              "dia": "Lunes",
              "temperatura": "18°",
              "estado": "Soleado"
            },
            {
              "dia": "Martes",
              "temperatura": "24°",
              "estado": "Soleado"
            },
            {
              "dia": "Miércoles",
              "temperatura": "19°",
              "estado": "Nublado"
            },
            {
              "dia": "Jueves",
              "temperatura": "18°",
              "estado": "Lluvioso"
            },
            {
              "dia": "Viernes",
              "temperatura": "18°",
              "estado": "Tormenta"
            },
            {
              "dia": "Sábado",
              "temperatura": "20°",
              "estado": "Tormenta"
            },
            {
              "dia": "Domingo",
              "temperatura": "23°",
              "estado": "Nublado"
            }
           ]
    },
    {
      "region": "Metropolitana",
      "clima": [
            {
              "dia": "Lunes",
              "temperatura": "15°",
              "estado": "Soleado"
            },
            {
              "dia": "Martes",
              "temperatura": "14°",
              "estado": "Nublado"
            },
            {
              "dia": "Miércoles",
              "temperatura": "9°",
              "estado": "Tormenta"
            },
            {
              "dia": "Jueves",
              "temperatura": "20°",
              "estado": "Lluvioso"
            },
            {
              "dia": "Viernes",
              "temperatura": "8°",
              "estado": "Lluvioso"
            },
            {
              "dia": "Sábado",
              "temperatura": "13°",
              "estado": "Nublado"
            },
            {
              "dia": "Domingo",
              "temperatura": "13°",
              "estado": "Soleado"
            }
           ]
    }
  ];
  regionSeleccionada = this.climas[0];
  tipoTemperatura = "Celsius";
  actualizarInformacion = false;

  regionSelect = this.climas[0].region;
  estadoSelect = 'Soleado';
  diaSelect = "Lunes";

  ngOnInit() {
  }

  seleccionarRegion(region){
    this.regionSeleccionada = region;
  }
  setActualizarInformacion(){
    this.actualizarInformacion = true;
  }

  onItemChange(value){
    this.estadoSelect = value;
 }

 onSubmit(){
  for (var i = 0; i < this.climas.length; i++){
    if (this.climas[i].region == this.regionSelect){
      for(var j = 0; j < this.climas[i].clima.length; j++){
        if(this.climas[i].clima[j].dia == this.diaSelect){
          this.climas[i].clima[j].estado = this.estadoSelect;
        }
      }
    }
  }
  
  this.actualizarInformacion = false;
  this.regionSelect = this.climas[0].region;
  this.estadoSelect = 'Soleado';
  this.diaSelect = "Lunes";
}
}
