import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonce';
import { Observable, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  baseurl  = "/api/annonces"

  constructor(private http:HttpClient) { }
  
  getAnnonces(titre:string,type:string,prix_min:number,prix_max:number): Observable<Annonce> {
      
      const params = new HttpParams()
      .set('titre', titre)
      .set('type', type)
      .set('prix_max', prix_max)
      .set('prix_min', prix_min);

      const URL = this.baseurl+ '?' + params.toString();

      console.log("final url = ",URL);
      
      return this.http
        .get<Annonce>(URL)
        
  }
  
}
