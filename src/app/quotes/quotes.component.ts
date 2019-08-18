import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {



  quotesArr : Quotes [] = [

    new Quotes (1,' Robert Frost','komen','Two roads diverged in a wood ,and I --I took the less traveled by ,and that has made all difference.',new Date(2019,6,1),23,6),
    new Quotes (2,' Maya Angelou','komen','There is no greater agony than bearing an untold story inside you',new Date(2019,6,10),31,8),
    new Quotes (3,' dr .Dre','komen','Even when i was close to defeat i rose to my feet',new Date(2019,6,15),27,10),
    new Quotes (4,' Makaveli','komen','Reality is wrong .Dreams are for real',new Date(1995,6,19),13,5),

  ]
  move(index){
    this.quotesArr[index].show = !this.quotesArr[index].show;


  }

  likeAdd(willAdd,index){
    if( willAdd ){
      let likeNum = this.quotesArr[index].upvote;
      this.quotesArr[index].upvote = likeNum + 1;

      let most = this.quotesArr[index].upvote - this.quotesArr[index].downvote;

    }
  }

  likeDisAdd(willDlike,index){
    if( willDlike ){
      let disLikeNum = this.quotesArr[index].downvote;
      this.quotesArr[index].downvote = disLikeNum + 1;

    }
  }

  removeDiary(willDelete,index){
    if(willDelete){
      let confirmation = confirm(`Are you sure you want to delete QUOTE?`);
      if(confirmation){
        this.quotesArr.splice(index,1);
      }
    }
  }

  updateForm (quote){
    let newId = this.quotesArr.length;
    quote.id = newId + 1;
    quote.postDate = new Date ;
    this.quotesArr.push(quote);
  }


  constructor() { }

  ngOnInit() {
  }

}
