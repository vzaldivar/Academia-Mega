import { FormularioComponent } from './Page/formulario/formulario.component';
import { Routes } from '@angular/router';
import { CardsComponent } from './Components/Cards/cards.component';
import { TodoComponent } from './Components/todo/todo.component';
import { HomeComponent } from './Page/home/home.component';
import { ErrorComponent } from './Page/error/error.component';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';
import { ProductosInfoComponent } from './Page/productos-info/productos-info.component';
import { ServicePageComponent } from './Page/service-page/service-page.component';
import { ProductListComponent } from './Page/product-list/product-list.component';
import { UsuariosComponent } from './Page/usuarios/usuarios.component';

export const routes: Routes = [

  {
    path:'',
    component: UsuariosComponent
  },
  {
    path:'product-list',
    component: ProductListComponent
  },
  {
    path:'formulario',
    component: FormularioComponent
  },
  {
    path:'servicios',
    component: ServicePageComponent
  },
  {
    path:'productos',
    component: ProductosInfoComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'card',
    component: CardsComponent
  },
  {
    path:'todo',
    component: TodoComponent
  },
  {
    path:'gestor',
    component: ProductManagerComponent
  },
  {
    path:'**',
    component: ErrorComponent
  }
];
