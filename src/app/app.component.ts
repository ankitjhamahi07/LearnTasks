import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tasks';

  constructor(private apollo: Apollo, private service: GraphqlService) {


  }

}
