import { Component, OnInit, ViewChild } from '@angular/core'
import { RestFulService } from 'src/app/rest-ful.service';
import {
  MatTableDataSource, MatSort, MatPaginator, MatFormField,
  MatInput
} from '@angular/material';

@Component({
  selector: 'app-second-list',
  templateUrl: './second-list.component.html',
  styleUrls: ['./second-list.component.css']
})
export class SecondListComponent implements OnInit {

  public todoList;
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'title', 'userId', 'completed'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private rest: RestFulService) { }

  ngOnInit() {

    this.getTodoList();
  }



  getTodoList() {
    this.rest.getTodos().subscribe(result => {
      this.dataSource = new MatTableDataSource(result as any);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
