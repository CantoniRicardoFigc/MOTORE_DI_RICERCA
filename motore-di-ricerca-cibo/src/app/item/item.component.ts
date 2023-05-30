import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  })
  
export class ItemComponent implements OnInit {
  routeObs: Observable<ParamMap> | undefined;
  foodServiceObs: Observable<Object> | undefined;
  x = 0;
  mostra=false;
  carrello : string [] = [];
  carrelloQ : string [] = [];

  items: any; //Qui salverò la traccia selezionata
  isDisabled: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoodService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
    
    if (this.x >= 1) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let itemId = params.get('id'); //Ottengo l'id dai parametri
    console.log(itemId); //Stampo su console
    this.foodServiceObs = this.service.searchId(itemId);
    this.foodServiceObs.subscribe(
      (data) => ((this.items = data), console.log(data))
    );
  };

  aggiungi = () => {
    this.x += 1;

    if (this.x >= 1) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  sottrai = () => {
    if (this.x > 0) {
      this.x -= 1
    }

    if (this.x >= 1) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  mostraDiv = (nomeProd: any) => {
    this.mostra = true;

    let xStringato = this.x.toString();
    localStorage.setItem(nomeProd, xStringato);
    
    for (var i = 0; i < localStorage.length; i++){
      let key =  localStorage.key(i);
      if (key != null) {
        let val = localStorage.getItem(key)
          if(val != null) {
            this.carrello.push(key);
            this.carrelloQ.push(val);
          }
      }
    }  

  }

  goBack(): void {
    this.location.back();
  }

  rimuoviEl = () => {
      this.carrello.splice(1, 1);
      this.carrelloQ.splice(1, 1);
      localStorage.clear(); 
  }
}
