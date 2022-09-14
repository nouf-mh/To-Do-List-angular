import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() term: EventEmitter <string> = new EventEmitter();
  termSearch : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onKeyupSearch(){
    this.term.emit(this.termSearch);
  }
}
