import React, { useEffect, useState } from "react";
import axios from "axios";

interface ShippingMethod {
    id: string;
    title: string;
    method_title: string;
}

const ShippingMethods: React.FC = () => {
    const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        axios.get<ShippingMethod[]>("https://node.pietryga.com.pl/api/shipping_methods", {
        })
            .then(response => {
                setShippingMethods(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Błąd pobierania metod wysyłki:", error);
                setError("Nie udało się pobrać metod wysyłki.");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Ładowanie metod wysyłki...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h3>Dostępne metody wysyłki</h3>
            {shippingMethods.length > 0 ? (
                <ul>
                    {shippingMethods.map(method => (
                        <li key={method.id}>
                            <strong>{method.title}</strong> - {method.method_title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Brak dostępnych metod wysyłki.</p>
            )}
        </div>
    );
};

export default ShippingMethods;