import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
import { OrdineComponent } from './ordine/ordine.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'ordine', component: OrdineComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
