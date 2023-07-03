import { Component, Input } from '@angular/core';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  
  @Input()annonceList:any = []

  @Input() errorMessage:string= '';

  constructor (public annonceService: AnnonceService){
    
  }

  submit(search_form:any){
    //console.log("form submited",search_form.value);
    const data = search_form.value
    

  //   this.annonceService.getAnnonces(data.titre,data.type,data.prix_min,data.prix_max).subscribe((data:{}) => {
  //     console.log(data)
  //     this.annonceList = data;
  //   }
  //  );


  this.annonceService.getAnnonces(data.titre,data.type,data.prix_min,data.prix_max).subscribe({
        next: data => {
          this.annonceList = data;
        },
        error: error => {
            this.errorMessage ="something wrong with the server! try again later";
            console.error('There was an error!', this.errorMessage);
        }
    })

  }


  reset(search_form:any){
    search_form.resetForm()
  }

}
