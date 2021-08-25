import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsServiceService } from './../produits-service.service';
import { modelProduit } from './../model/model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
produits:modelProduit
message: string;
addForm :FormGroup
  constructor(private produitService: ProduitsServiceService, private router: Router, private activeRoute: ActivatedRoute, private fbuilder: FormBuilder) { }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params.id;
    this.produitService.getProduitbyId(routeParams).subscribe((produit: modelProduit) => {
      this.addForm.patchValue(produit) ;

    });
    this.addForm = this.fbuilder.group({
      id: [''],
      nomProduit: ['', Validators.required],
      prixProduit: ['', Validators.required ],

        }) ;
      }

updateProduct(){
this.produitService.updateProduit(this.addForm.value).subscribe(()=>{

  this.message="Mise à jour effectuée avec succés";
  setTimeout(()=>{
    this.router.navigate(['/']) ;
  },1000)


})
}
}
