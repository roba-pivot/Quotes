export class Quotes {
    public show : boolean ;
    constructor( public id : number, public author : string ,public uploadedBy : string,public quote : string , public postDate : Date , public upvote : number , public downvote: number){
        this.show = false;
    }
}
