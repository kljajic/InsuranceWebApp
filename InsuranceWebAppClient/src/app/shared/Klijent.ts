import { Polisa } from "./Polisa";

export class Klijent{
    id: number;
    ime: string;
    prezime: string;
    jmbg: string;
    brojPasosa: string;
    adresa: string;
    brojTelefona: string;
    email: string;
    polise: Polisa[];
};