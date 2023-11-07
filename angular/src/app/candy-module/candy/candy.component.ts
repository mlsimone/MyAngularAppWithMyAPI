import { Component, OnInit } from '@angular/core';
import { CandyService } from '../candy.service';
import { Candy } from '../../models';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {

  mine: Array<Candy> = [];

  constructor(private candyService: CandyService) {}

  ngOnInit() {

    this.candyService.getAll()
    .subscribe((returned: Array<Candy>) =>
              {this.mine = returned;});


  }

}
