export const EMAIL = "info@roza-kwiaty.pl";
export const TEL = "(+48) 32 230 48 58";

interface Address {
    street: string;
    streetNumber: string;
    postNumber: string;
    city: string;
}
export const ADDRESS:Address = {
    street: "Tarnogórska",
    streetNumber: "14",
    postNumber: "44-100",
    city: "Gliwice"
};

export const PHONE_NUMBERS: string[] = [
    "(+48) 32 230 48 58",
    "(+48) 781 360 260",
    "(+48) 12 312 43 10",
    "(+48) 61 415 18 12]"
]

export const CITIES: string[] = [
    "Gliwice", "Bytom", "Chorzów", "Katowice", "Knurów", "Mikołów", "Orzesze", "Pyskowice", "Ruda Śląska", "Rybnik", "Tychy", "Zabrze"
]