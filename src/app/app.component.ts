import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = 'Alperen';
  items= [
    { description: "Kahvaltı", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Fatura", action: "No" },
    { description: "Sinema", action: "No" }
  ];
}
