import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  
  columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true },
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 38000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
}
