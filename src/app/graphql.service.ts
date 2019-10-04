import { Injectable } from '@angular/core';
import { Country } from './countryTypes';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  public countries: Country[];


  constructor(private apollo: Apollo, httpLink: HttpLink) {

    apollo.create({
      link: httpLink.create({ uri: environment.serverURL }),
      cache: new InMemoryCache()
    });

  }


  getCountryList() {
    return this.apollo.query({
      query: gql`{
        countries
         {
           code
           name
           emoji  
         }
       }`
    });
  }



}
