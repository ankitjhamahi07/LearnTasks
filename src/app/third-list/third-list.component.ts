import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { RestFulService } from '../rest-ful.service';
import { MatTableDataSource, MatSort, MatPaginator, MatFormField, MatInput, MatSnackBar } from '@angular/material';
//import { ToastrService } from 'ngx-toastr';

// tslint:disable-next-line: class-name
interface mergedData {
  countryName?: string;
  title?: string;
  id?: number;
  completed?: boolean;
  emojiU?: string;
}

@Component({
  selector: 'app-third-list',
  templateUrl: './third-list.component.html',
  styleUrls: ['./third-list.component.css']
})


export class ThirdListComponent implements OnInit {
  countryList;
  todoList;
  cList;
  mbind;
  data: Array<mergedData> = [];
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'countryName', 'title', 'emojiU'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private snack: MatSnackBar, private graph: GraphqlService, private rest: RestFulService) {

    for (let i = 0; i < 10; i++) {
      this.data[i] = { countryName: '', completed: false, id: 0, emojiU: 'x', title: 'NA' };
    }
  }

  ngOnInit() {
    this.getCountryList();

  }

  getCountryList() {

    this.graph.getCountryList().subscribe(result => {
      // tslint:disable-next-line: quotemark
      console.log("Country List");
      this.countryList = result.data;
      this.cList = this.countryList;

      console.log(this.countryList);
      this.getTodoList();
    });

  }

  getTodoList() {
    this.rest.getTodos().subscribe(result => {
      // tslint:disable-next-line: quotemark

      this.todoList = result;


      this.mergeData();
    });

  }


  mergeData() {


    var merged = (Object.assign(this.todoList, this.cList));
    for (let i = 0; i < 10; i++) {
      this.data[i].countryName = merged.countries[i].name;
      this.data[i].completed = merged[i].completed;
      this.data[i].id = merged[i].id;
      this.data[i].emojiU = merged.countries[i].emoji;
      this.data[i].title = merged[i].title;
    }

    this.dataSource = new MatTableDataSource(this.data as any);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.data);


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getInfo(id) {

    this.snack.open('Hitting Node Express Middleware', 'close', {
      duration: 4000,
      verticalPosition:'top',
      panelClass: ['warning'],
    });

    this.rest.hitTodos(id).subscribe(res => {

      this.snack.open('Successfully Returned ', 'close', {
        duration: 4000,
        panelClass: ['success'],
      });
      //    this.toastr.success('Successfully fetched the data');

      console.log(res);
    })

  }
}
