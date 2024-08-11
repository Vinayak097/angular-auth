import { Routes } from '@angular/router';
import { CardComponent } from './authmodule/card/card.component';

export const routes: Routes = [
    {
        path:'auth',loadChildren:()=>import('./authmodule/authmodule.module').then(m=>m.AuthmoduleModule)
    }
];

