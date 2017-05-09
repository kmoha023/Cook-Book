export class Recipe{
    
    public name:String;
    public description:String;
    public imagepath:String;
    
    constructor(name1:String, desc:String, imgurl:String){
        this.name = name1;
        this.description = desc;
        this.imagepath = imgurl;
    }
}