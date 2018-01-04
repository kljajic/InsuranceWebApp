import { DomenAtributa } from "./DomenAtributa";
import { KontekstAtributa } from "./KontekstAtributa";
import { PredefinisanaVrednost } from "./PredefinisanaVrednost";
import { TipOsiguranja } from "./TipOsiguranja";
import { VrednostAtributaOsiguranja } from "./VrednostAtributaOsiguranja";

export class TipAtributa{
    id: number;
    naziv: string;
    domen: DomenAtributa;
    obavezan: boolean;
    uticeNaCenu: boolean;
    slobodnoPolje: boolean;
    kontekst: KontekstAtributa;
    predefinisaneVrednosti: PredefinisanaVrednost[];
    vrednostiAtributa: VrednostAtributaOsiguranja[];
    tipoviOsiguranja: TipOsiguranja[];
};