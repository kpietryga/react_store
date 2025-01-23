import TopTitle from "../common/TopTitle.tsx";
import {useState} from "react";

const Checkout: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");

    const onSendForm = (e) => {
        e.preventDefault();
        alert(`${firstName} ${lastName} ${street}`);
    }


    return (
        <>
            <TopTitle title="Zamówienie" subTitle="Poznaj nasze usługi" />
            <main className="max-w-screen-xl mx-auto text-justify p-12 animate-fadeIn grid grid-cols-2 gap-9">
                <form onSubmit={onSendForm}>
                <div className="p-9 bg-slate-100 rounded-xl">
                    <div className="py-4">
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                            Imię
                        </label>
                        <input
                            onChange={(e) => {
                                setFirstName(e.target.value)
                        }}
                            type="text"
                            id="firstName"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        />

                    </div>
                    <div className="py-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                            Nazwisko
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                            street
                        </label>

                        <input
                            type="text"
                            id="address"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                            onChange={(e) => {
                                setStreet(e.target.value)
                            }}
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                            Miasto
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-2">
                            Kod pocztowy
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                            Kraj
                        </label>
                        <select
                            id="country"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        >
                            <option value="Polska">Polska</option>
                            <option value="Niemcy">Niemcy</option>
                            <option value="Francja">Francja</option>
                        </select>
                    </div>
                    <div className="py-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Numer telefonu
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Adres e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        />
                    </div>
                    <div className="py-4">
                        <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                            Dodatkowe uwagi
                        </label>
                        <textarea
                            id="notes"
                            className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
                        ></textarea>
                    </div>

                    <div className="py-4">
                        <button type="submit">Wyślij</button>
                    </div>


                </div>
                <div className="border rounded-xl"></div>
                </form>
            </main>
        </>

    )
};

export default Checkout;