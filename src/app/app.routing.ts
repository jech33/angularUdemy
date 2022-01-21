import { Routes, RouterModule, Route } from  '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coche.component';

const appRoutes: Routes = [
    {path: '',                  component: HomeComponent},
    {path: 'empleado',          component: EmpleadoComponent},
    {path: 'fruta',             component: FrutaComponent},
    {path: 'contacto',          component: ContactoComponent},
    {path: 'contacto/:page',    component: ContactoComponent},
    {path: 'coches',            component: CochesComponent},
    {path: 'home',              component: HomeComponent},
    {path: '**',                component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);