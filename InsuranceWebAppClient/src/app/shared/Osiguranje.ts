import { TipOsiguranja } from "./TipOsiguranja";
import { Polisa } from "./Polisa";
import { VrednostAtributaOsiguranja } from "./VrednostAtributaOsiguranja";

export class Osiguranje{
    id: number;
    polisa: Polisa;
    tipOsiguranja: TipOsiguranja;
    vrednostiAtributaOsiguranja: VrednostAtributaOsiguranja[];
};