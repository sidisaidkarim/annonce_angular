import { Component, OnInit,Input } from '@angular/core';
import { AnnonceService } from '../service/annonce.service';
import { Annonce } from '../model/annonce';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.sass']
})
export class C1Component implements OnInit{

  // annonceList:any = []

  // @Input() msgFromParent:string | undefined;
  @Input()annonces:any = [];
  @Input()errorMsg:any;
  p:number=0;

  constructor (public annonceService: AnnonceService){
    
  }
  test =" test"
  ngOnInit(): void {
    console.log("on init method ");

  //   this.annonceService.getAnnonces().subscribe((data:{})=>{
  //   this.annonceList = data;
  //  });
  }
}
