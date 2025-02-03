import React, { useEffect, useState } from "react";
import axios from "axios";

interface PaymentMethod {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
}

const PaymentMethods: React.FC = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<PaymentMethod[]>("https://node.pietryga.com.pl/api/payment_gateways", {
        })
            .then(response => {
                // Filtrujemy tylko włączone metody płatności
                const enabledMethods = response.data.filter(method => method.enabled);
                setPaymentMethods(enabledMethods);
                setLoading(false);
            })
            .catch(error => {
                console.error("Błąd pobierania metod płatności:", error);
                setError("Nie udało się pobrać metod płatności.");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Ładowanie metod płatności...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h3>Dostępne metody płatności</h3>
            {paymentMethods.length > 0 ? (
                <ul>
                    {paymentMethods.map(method => (
                        <li key={method.id}>
                            <strong>{method.title}</strong> - {method.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Brak dostępnych metod płatności.</p>
            )}
        </div>
    );
};

export default PaymentMethods;