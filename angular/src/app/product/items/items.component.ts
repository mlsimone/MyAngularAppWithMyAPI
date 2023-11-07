import { Component,  OnInit } from '@angular/core';
import { Product } from '../../models';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<Product> = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems()
    .subscribe((returned : Array<Product>) =>
                 {this.items = returned;});

  }

}
