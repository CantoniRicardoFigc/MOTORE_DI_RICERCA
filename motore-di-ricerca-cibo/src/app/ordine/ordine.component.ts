import { Component } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})
export class OrdineComponent {

  divVisible: boolean = false;

  toggleDiv() {
    this.divVisible = !this.divVisible;
  }

}
