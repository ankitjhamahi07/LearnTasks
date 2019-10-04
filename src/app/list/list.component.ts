import { Component, OnInit, ViewChild } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Country } from '../countryTypes';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphqlService } from '../graphql.service';
import { MatTableDataSource, MatSort, MatPaginator, MatFormField, MatInput} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public countryList;
  dataSource: MatTableDataSource<Country>;

  displayedColumns: string[] = ['code', 'name', 'emoji'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private apollo: Apollo, private service: GraphqlService) {


  }

  ngOnInit(): void {

    this.getAllCountries();
  }

  getAllCountries() {

    this.service.getCountryList().subscribe(result => {
      this.countryList = result.data as Country[];
      this.dataSource = new MatTableDataSource(this.countryList.countries);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.countryList.countries[0]);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
