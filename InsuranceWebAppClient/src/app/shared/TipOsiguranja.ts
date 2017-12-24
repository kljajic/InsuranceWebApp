import { OsiguravajucaKuca } from "./OsiguravajucaKuca";
import { Osiguranje } from "./Osiguranje";

export class TipOsiguranja{
    id: number;
    naziv: string;
    osiguravajucaKuca: OsiguravajucaKuca;
    osiguranja: Osiguranje[];
    tipoviAtributa: TipOsiguranja[];
};