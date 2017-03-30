import { Component, Input } from '@angular/core';
import { DropdownItem } from '../questions/models';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent  {
  @Input() howmanyItem: DropdownItem;

  constructor() { }
}
