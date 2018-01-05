import { Routes } from "@angular/router";

import { OsiguravajuceKuceComponent } from "../osiguravajuce-kuce/osiguravajuce-kuce.component";
import { OsiguravajucaKucaComponent } from "../osiguravajuca-kuca/osiguravajuca-kuca.component";
import { KupiOsiguranjeComponent } from "../kupi-osiguranje/kupi-osiguranje.component";
import { ONamaComponent } from "../o-nama/o-nama.component";

export const routes: Routes = [
    { path: 'osiguravajuceKuce', component: OsiguravajuceKuceComponent },
    { path: 'osiguravajucaKuca/:id', component: OsiguravajucaKucaComponent },
    { path: 'kupiOsiguranje', component: KupiOsiguranjeComponent },
    { path: 'oNama/:id', component: ONamaComponent },
    { path: '', redirectTo: '/osiguravajuceKuce', pathMatch: 'full'}
];