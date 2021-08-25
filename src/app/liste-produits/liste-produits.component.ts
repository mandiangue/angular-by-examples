import { modelProduit } from './../model/model';
import { ProduitsServiceService } from './../produits-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
produits:modelProduit[]

  constructor(private serviceproduit:ProduitsServiceService ) { }

  ngOnInit(): void {
    this.serviceproduit.getProduits(this.produits).subscribe((data)=>{
this.produits= data
    })

  }
deleteProduct(produits:modelProduit){
  if(confirm('Etes vous sûr de vouloir supprimer le produit ?'))
  this.serviceproduit.deleteProduit(produits)
  .subscribe(()=>
    this.produits= this.produits.filter((t)=>
    t.id !== produits.id))
  }

}
