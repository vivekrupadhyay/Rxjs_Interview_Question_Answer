import { Component, OnInit } from "@angular/core";
import { of, Observable, from } from "rxjs";
import { map, filter, take, last, scan } from "rxjs/operators";

import { Ingredient } from "./ingredient";
import { Cake } from "./cake";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Exercise1";
  constructor() {}
  ngOnInit(): void {
    const ingredient$ = of(
      new Ingredient("Flour", "BASE"),
      new Ingredient("Sugar", "SWEET"),
      new Ingredient("Strawberry", "FRUIT"),
      new Ingredient("Salt", "BASE"),
      new Ingredient("Pineapple", "FRUIT")
    );

    const cake$ = ingredient$.pipe(
      filter((i) => i.type === "FRUIT"),
      scan((acc, curr) => acc.addIngredient(curr), new Cake("Fruitcake")),
      map((c) => c.bake()),
      last()
    );
    cake$.pipe(take(1)).subscribe((v) => console.log(v));
  }
}
