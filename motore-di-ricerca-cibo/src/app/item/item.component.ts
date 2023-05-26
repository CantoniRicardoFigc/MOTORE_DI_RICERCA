import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  routeObs: Observable<ParamMap> | undefined;
  foodServiceObs: Observable<Object> | undefined;
  x = 0;

  items: any; //Qui salverò la traccia selezionata
  isDisabled: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoodService
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

  carrello = () => {
    this.router.navigate(['/ordine']);
  }

}
