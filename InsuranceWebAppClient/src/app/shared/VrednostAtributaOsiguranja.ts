import { TipAtributa } from "./TipAtributa";
import { Osiguranje } from "./Osiguranje";

export class VrednostAtributaOsiguranja{
    id: number;
    vrednost: string;
    tipAtributa: TipAtributa;
    osiguranje: Osiguranje;
};