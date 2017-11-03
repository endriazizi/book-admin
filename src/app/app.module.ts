import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingupComponent } from './singup/singup.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { GenreComponent } from './genre/genre.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

//Routing
const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'book', component: BookComponent },
      { path: 'home', component: HomeComponent },
      { path: 'addBook', component: AddBookComponent },
      { path: 'editBook', component: EditBookComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'customerList', component: CustomerListComponent },
      { path: 'updateCustomer', component: UpdateCustomerComponent },
      { path: 'genre', component: GenreComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'order-detailed', component: OrderDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SingupComponent,
    AddBookComponent,
    EditBookComponent,
    CustomerComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    GenreComponent,
    OrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
