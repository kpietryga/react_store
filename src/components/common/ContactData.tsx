export const EMAIL = "info@roza-kwiaty.pl";
export const TEL = "(+48) 32 230 48 58";

interface Address {
    street: string;
    streetNumber: string;
    postNumber: string;
    city: string;
}

interface PhoneNumber {
    tel: string;
    url: string;
}

export const ADDRESS: Address = {
    street: "Tarnogórska",
    streetNumber: "14",
    postNumber: "44-100",
    city: "Gliwice"
};

export const PHONE_NUMBERS: PhoneNumber[] = [
    {tel: "(+48) 32 230 48 58", url: "tel:+48322304858"},
    {tel: "(+48) 781 360 260", url: "tel:+48781360260"},
    {tel: "(+48) 12 312 43 10", url: "tel:+48781360260"},
    {tel: "(+48) 61 415 18 12", url: "tel:+48781360260"}
]

export const CITIES: string[] = [
    "Gliwice", "Bytom", "Chorzów", "Katowice", "Knurów", "Mikołów", "Orzesze", "Pyskowice", "Ruda Śląska", "Rybnik", "Tychy", "Zabrze"
]