import { HttpClient } from "@angular/common/http";
import {Annonce} from "../model/annonce";
export class AnnonceService {

    constructor (private http:HttpClient){

    }

    getAnnonce(){
        this.http.get<any>("http://localhost:8080/api/annonces").subscribe(data=>{
            console.log(data)
        })
    }

}