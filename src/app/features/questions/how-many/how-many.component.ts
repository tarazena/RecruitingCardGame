import { Component, Input } from '@angular/core';
import { DropdownItem } from '../models';

@Component({
  selector: 'app-how-many',
  templateUrl: './how-many.component.html',
  styleUrls: ['./how-many.component.css']
})
export class HowManyComponent {

  listItems: DropdownItem[] = [
    {id: '1', description: 'Black Cards'},
    {id: '3', description: 'Red Cards'},
    {id: '4', description: 'Hearts'},
    {id: '5', description: 'Clubs'},
    {id: '6', description: 'Diamonds'},
    {id: '7', description: 'Spades'},
    {id: '8', description: 'Even Value Cards'},
    {id: '8', description: 'Odd Value Cards'},
    {id: '8', description: 'Face Cards'},
  ];

  selectedItem;

  onchange(item) {
    // alert(item.description);
  }

  constructor() { }
}
