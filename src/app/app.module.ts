import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ListComponent } from 'src/app/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatFormFieldModule, MatDividerModule, MatButtonModule, MatSnackBar, MatSnackBarModule
// tslint:disable-next-line: quotemark
} from "@angular/material";

import {MatCardModule} from '@angular/material/card';
import { SecondListComponent } from './second-list/second-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ThirdListComponent } from './third-list/third-list.component';
//import {ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SecondListComponent,
    ThirdListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
   // ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
