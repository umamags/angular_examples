import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iportal-list',
  templateUrl: './iportal-list.component.html',
  styleUrls: ['./iportal-list.component.scss']
})
export class IportalListComponent implements OnInit {

  columnDefs3 = [
        {headerName: 'id', field: 'id', sortable: true, filter: true },
        {headerName: 'title', field: 'title', sortable: true, filter: true },
        {headerName: 'author', field: 'author', sortable: true, filter: true},
        {headerName: 'first_sentence', field: 'first_sentence', sortable: true, filter: true},
        {headerName: 'published', field: 'published', sortable: true, filter: true}
    ];
  columnDefs2 = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true },
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];
  columnDefs = [
        {headerName: 'Seq', field: 'seq', sortable: true, filter: true },
        {headerName: 'Reference', field: 'Reference', sortable: true, filter: true },
        {headerName: 'Description', field: 'Description', sortable: true, filter: true},
        {headerName: 'Tools', field: 'Tools', sortable: true, filter: true},
        {headerName: 'Tower', field: 'Tower', sortable: true, filter: true},
        {headerName: 'ProjectTitle', field: 'ProjectTitle', sortable: true, filter: true},
        {headerName: 'OverallStatus', field: 'OverallStatus', sortable: true, filter: true},
        {headerName: 'EstimatedFTE/Seat', field: 'EstimatedFTE/Seat', sortable: true, filter: true},
        {headerName: 'EstimatedCompletionDate', field: 'EstimatedCompletionDate', sortable: true, filter: true},
        {headerName: 'StatusDesc2', field: 'StatusDesc2', sortable: true, filter: true},
        {headerName: 'Current Details', field: 'Current Details', sortable: true, filter: true},
        {headerName: 'Country', field: 'Country', sortable: true, filter: true},
        {headerName: 'Qtr', field: 'Qtr', sortable: true, filter: true},
        {headerName: 'New Implementation', field: 'New Implementation', sortable: true, filter: true}
    ];
	
	rowData: any;
	constructor(private http: HttpClient) {

    }	
	ngOnInit() {
        // this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
        // this.rowData = this.http.get('http://localhost:5000/api/cars');
        // this.rowData = this.http.get('http://localhost:5000/api/books2');
        this.rowData = this.http.get('http://localhost:5000/api/iportal');
    }

}
