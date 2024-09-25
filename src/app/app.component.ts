import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-01-introduccion';
  nombre = 'Emilio';

  showAlert() {
    alert('Cara de bobo');
  }
}
