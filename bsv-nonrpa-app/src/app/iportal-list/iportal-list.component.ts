import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iportal-list',
  templateUrl: './iportal-list.component.html',
  styleUrls: ['./iportal-list.component.scss']
})
export class IportalListComponent implements OnInit {

  columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true },
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];
	
	rowData: any;
	constructor(private http: HttpClient) {

    }	
	ngOnInit() {
        this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
    }

}
