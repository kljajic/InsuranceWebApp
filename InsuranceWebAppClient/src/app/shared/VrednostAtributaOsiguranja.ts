import { TipAtributa } from "./TipAtributa";
import { Osiguranje } from "./Osiguranje";

export class VrednostAtributaOsiguranja{
    id: number;
    vrednost: string;
    kontrolniBroj: number;
    tipAtributa: TipAtributa;
    osiguranje: Osiguranje;

    constructor(vrednost: string,tipAtributa: TipAtributa, kontrolniBroj: number){
        this.vrednost = vrednost;
        this.tipAtributa = tipAtributa;
        this.kontrolniBroj = kontrolniBroj;
    }
};