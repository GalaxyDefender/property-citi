export class Featured {
    public price: string;
    public description: string;
    public imagePath: string;

    constructor(price:string, desc:string, imagePath:string) {
        this.price = price;
        this.description = desc;
        this.imagePath = imagePath;
    }
}