import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 model = new Model();
 isDispaly=false;
 getName(){
  return this.model.user;
 }
 getItems(){
  if(this.isDispaly){
    return this.model.items;
  }
  return this.model.items.filter(item=> !item.action);
 }

 addItem(value: any){
  if(value!=""){
    this.model.items.push(new ToDoItem(value,false));
  }
 }
}
