import axios from "axios";

interface Image {
    src: string;
    alt: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    images: Image[];
}
const apiClient = axios.create({baseURL: "https://node.pietryga.com.pl/api/",});

export const fetchData = async (name:string, params:object):Promise<Product[]> => {
    try {
        const response = await apiClient.get(`/${name}`, params)
        console.log('Fetched Data:', response.data);
        return response.data;
    } catch (error) {
        console.error(error instanceof Error ? `Błąd: ${error.message}` : `Nieznany błąd: ${error}`);
        throw error;
    }
};


