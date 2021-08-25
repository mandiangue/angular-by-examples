import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitsServiceService } from './../produits-service.service';
import { modelProduit } from './../model/model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
produits:modelProduit[]
message: string;
ajoutForm: FormGroup
  constructor(private serviceproduit:ProduitsServiceService, private router: Router,  private fBuild: FormBuilder) { }

  ngOnInit(): void {
    this.ajoutForm = this.fBuild.group({
      nomProduit: ['', [Validators.required,Validators.minLength(3)]],
      prixProduit: ['', Validators.required ]

        }) ;
  }

      ajoutProduit(){

        this.serviceproduit.ajouterProduit(this.ajoutForm.value).subscribe()
        this.message="Produit ajouté avec succés";
        setTimeout(()=>{
          this.router.navigate(['/']) ;
        },1000)


    }

    get nomProduit(){
      return this.ajoutForm.get('nomProduit');
    }
    get prixProduit(){
      return this.ajoutForm.get('prixProduit');
    }

}
