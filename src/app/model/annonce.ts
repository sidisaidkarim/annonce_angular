

export class Annonce {
    id : number;
    titre : string;
    description : string;
    prix : number;
    typeAnnonce : string;

    constructor (id:number,titre:string,description:string,prix:number,typeAnnonce:string){
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
        this.typeAnnonce = typeAnnonce

    }
}