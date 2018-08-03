import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styles: []
})
export class RecursiveComponent implements OnInit {

  @Input('directories') private directories = [
    'myfolder' 
  ];

  constructor() { }

  ngOnInit() {
  }

  checkFolder(dir:any){
    console.log(dir);
    if(typeof dir === 'string'){
      return true;
    }else{
      return false;
    }
  }

  onClikFolder(showHide:boolean){
    showHide = !showHide;
  }

}
