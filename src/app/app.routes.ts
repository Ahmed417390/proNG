import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent,title:'home'  },
    {path:'products',component:ProductsComponent ,title:'products'},
    {path:'**',component:ErrorComponent ,title:'error'}
    // Add more routes here
];
