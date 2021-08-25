import { modelProduit } from './model/model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions={

  headers: new HttpHeaders({
    'content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProduitsServiceService {
produits:modelProduit[]
produitNew : modelProduit
apiUrl= "http://localhost:3000/produits"
  constructor(private http: HttpClient) { }


   getProduits(produits: modelProduit[]):Observable<modelProduit[]>{
return this.http.get<modelProduit[]>(this.apiUrl)
  }

  getProduitbyId(id: number): Observable<modelProduit> {
    return this.http.get<modelProduit>(`${this.apiUrl}/${id}`);

   }
  deleteProduit(produits:modelProduit):Observable<modelProduit>{
 return this.http.delete<modelProduit>(`${this.apiUrl}/${produits.id}`)

  }
  updateProduit(produitNew:modelProduit):Observable<modelProduit>{
    return this.http.put<modelProduit>(`${this.apiUrl}/${produitNew.id}`,produitNew, httpOptions)

     }

     ajouterProduit(produit:modelProduit):Observable<modelProduit>{
      return this.http.post<modelProduit>(this.apiUrl,produit)
     }
}
