export class Product{
    id:number;
    libele:string;
    prix:number;
    imageUrl:string;
    availability:boolean;

    constructor(id:number,libele:string,prix:number,imageUrl:string,availability:boolean){
        this.id=id;
        this.libele=libele;
        this.prix=prix;
        this.imageUrl=imageUrl;
        this.availability=availability;
    }

}

