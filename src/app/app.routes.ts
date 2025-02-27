import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedinGuard } from './core/guards/loggedin.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',   // Redirect to 'home' when accessing the base path
    pathMatch: 'full'     // Ensure the redirect only happens when the full path is empty
  },
  {
    path: '',
    component: AuthComponent,
    canActivate: [loggedinGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'Login'
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'Register'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
        canActivate: [authGuard]
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
        title: 'Cart'
      },
      {
        path: 'whislist',
        loadComponent: () => import('./pages/whislist/whislist.component').then(m => m.WhislistComponent),
        title: 'Whislist'
      },
      {
        path: 'proudcts',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
        title: 'Products'
      },
      {
        path: 'allorders',
        loadComponent: () => import('./pages/allorders/allorders.component').then(m => m.AllordersComponent),
        title: 'Products'
      },
      {
        path: 'categories',
        loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent),
        title: 'Categories'
      },
      {
        path: 'brands',
        loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent),
        title: 'Brands'
      },
      {
        path: 'checkout/:id',
        loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
        title: 'Brands'
      },
      
      {
        path: 'details/:id',
        loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent),
        title: 'details'
      },
      {
        path: '**',
        loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
        title: 'Not found'
      }
    ]
  }
];
