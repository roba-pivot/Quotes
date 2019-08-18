import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



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
      let likeNum = this.quotesArr[index].like;
      this.quotesArr[index].like = likeNum + 1;

      let most = this.quotesArr[index].like - this.quotesArr[index].disLike;

    }
  }

  likeDisAdd(willDlike,index){
    if( willDlike ){
      let disLikeNum = this.quotesArr[index].disLike;
      this.quotesArr[index].disLike = disLikeNum + 1;

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
