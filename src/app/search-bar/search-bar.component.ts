import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchValue: string = '';
  @Input() placeholder: string = 'Type a message here...'

  constructor() { }

  ngOnInit(): void {
  }

  onKeyPress(event: KeyboardEvent){
    if(event.key === 'Enter'){
      alert(this.searchValue);
    }
  }

  onSubmit(){

  }

}
