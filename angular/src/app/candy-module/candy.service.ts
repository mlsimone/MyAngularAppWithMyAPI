import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Candy } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CandyService {
  // a variable in a class can be defined like this:
  h: number = 1;
  hello: string = "Mary";
  
  chocolate: Candy = {id: 1, name: "chocolate", quantity: 10};
  jellybeans: Candy = {id: 1, name: "jellybeans", quantity: 20};
  tutifruiti: Candy = {id: 1, name: "tutifruity", quantity: 30};

  constructor() { }

  getAll():Observable<Array<Candy>>
  {
    // a variable in a function can be defined like this:
    var h:number = 2;
    var hello:string = "hello";

    // you can't do this:
    // p: number = 5;

    // you can do this:
    let p: number = 5;

    return of([
            this.chocolate,
            this.jellybeans,
            this.tutifruiti
            ]);
  }
}
