import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';

const routes: Routes = [
  {path: '', component:ListeProduitsComponent, pathMatch:'full'},
  {path: 'updateProduit/:id', component: UpdateProduitComponent},
  {path: 'ajouterProduit', component: AjoutProduitComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
