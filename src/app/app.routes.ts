import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',loadChildren:()=>import('./authmodule/authmodule.module').then(m=>m.AuthmoduleModule)
    }
];

