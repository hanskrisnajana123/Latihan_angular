import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  hasil : number;
  Bintang = ""
  Bintang1 = ""
  Bulat = ""
  bilArr1 = []
  bilArr2 = []
  pola = []
  pola1 = []
  bray : number;
  findResult(a, b){
    this.hasil = (Math.pow(parseInt(a),parseInt(b)))
    this.bilArr1.push(a)
    this.bilArr2.push(b)
  
    if(this.hasil % 2 == 0){
      for(var i=parseInt(b) - 1;i<(this.hasil);i++){
        for(var j=0;j<=i;j++){
          this.Bintang = this.Bintang + "*"
        }
        this.pola.push(this.Bintang)
        this.Bintang = ""
      }
    }
    else{
      var santuy = parseInt(b)
      for(var j=0;j<=santuy;j++){
          this.Bintang1 = ""
          this.Bulat = ""
        for(var i=0;i<parseInt(b);i++){
          this.Bintang1 = this.Bintang1 + "*"
        }
        for(var i=parseInt(a);i>0;i--){
          this.Bulat = this.Bulat + "o"
        }
        this.pola1.push(this.Bintang1 + this.Bulat)
        b = parseInt(b) - 1
        a = parseInt(a) - 1
      }
    }

    
  }


}
