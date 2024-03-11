import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 model = new Model();

 getName(){
  return this.model.user;
 }
 getItems(){
  return this.model.items.filter(item=> !item.action);
 }
}
