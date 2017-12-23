import { Routes } from "@angular/router";

import { OsiguravajuceKuceComponent } from "../osiguravajuce-kuce/osiguravajuce-kuce.component";
import { OsiguravajucaKucaComponent } from "../osiguravajuca-kuca/osiguravajuca-kuca.component";

export const routes: Routes = [
    { path: 'osiguravajuceKuce', component: OsiguravajuceKuceComponent },
    { path: 'osiguravajucaKuca/:id', component: OsiguravajucaKucaComponent },
    { path: '', redirectTo: '/osiguravajuceKuce', pathMatch: 'full'}
];