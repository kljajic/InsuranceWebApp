import { TipOsiguranja } from "./TipOsiguranja";
import { Polisa } from "./Polisa";
import { VrednostAtributaOsiguranja } from "./VrednostAtributaOsiguranja";

export class Osiguranje{
    id: number;
    tipOsiguranja: TipOsiguranja;
    iznos: number;
    vrednostiAtributaOsiguranja: VrednostAtributaOsiguranja[];

    public constructor(){
        this.vrednostiAtributaOsiguranja = new Array();
    }
};