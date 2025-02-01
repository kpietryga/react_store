import TopTitle from "../common/TopTitle.tsx";
import React, {useState} from "react";
import CartItem from "../common/Cart/CartItem.tsx";
import InputField from "../common/FromFields/InputField.tsx";
import SelectField from "../common/FromFields/SelectField.tsx";
import TextareaField from "../common/FromFields/TextareaField.tsx";

const Checkout: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [additional, setAdditional] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");


    const onSendForm = (e) => {
        e.preventDefault();
        alert(`${firstName} ${lastName} ${street} ${city} ${postCode} ${additional}`);
    }

    const pro = {
        id: 1,
            name: "buk1",
        price: 123,
        url: "https://woo.pietryga.com.pl/wp-content/uploads/2024/12/rozowafantazja-1.jpg",
    }


    return (
        <>
            <TopTitle title="Zamówienie" subTitle="Poznaj nasze usługi" />
            <main className="max-w-screen-xl mx-auto text-justify p-12 animate-fadeIn grid grid-cols-2 gap-9">
                <div><form onSubmit={onSendForm}>
                    <div className="p-9 bg-slate-100 rounded-xl">
                        <InputField id="firstName" label="Imię" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <InputField id="lastName" label="Nazwisko" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <InputField id="street" label="Ulica" value={street} onChange={(e) => setStreet(e.target.value)} />
                        <InputField id="streetNumber" label="Numer" value={streetNumber} onChange={(e) => setStreetNumber(e.target.value)} />
                        <InputField id="city" label="Miasto" value={city} onChange={(e) => setCity(e.target.value)} />
                        <InputField id="postCode" label="Kod Pocztowy" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
                        <SelectField
                            id="country"
                            label="Kraj"
                            options={[
                                { value: "Polska", label: "Polska" },
                                { value: "Niemcy", label: "Niemcy" },
                                { value: "Francja", label: "Francja" },
                            ]}
                        />
                        <InputField id="tel" label="Telefon" value={tel} onChange={(e) => setTel(e.target.value)} />
                        <InputField id="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextareaField id="additional" label="Dodatkowe Uwagi" value={additional} onChange={(e) => setAdditional(e.target.value)} />

                        <div className="py-4">
                            <button type="submit">Wyślij</button>
                        </div>


                    </div>
                    <div className="border rounded-xl"></div>
                </form></div>
                <div>
                    <h2 className="text-xl">Zamówienie</h2>
                    <CartItem product={pro} key={pro.id} remove={() => null} />
                    <CartItem product={pro} key={pro.id} remove={() => null} />
                    <CartItem product={pro} key={pro.id} remove={() => null} />
                    <h2 className="text-xl">Podsumowanie</h2>
                    <div className="">
                        <p>suma: 1500 zł</p>
                    </div>

                    <h2 className="text-xl">Wysyłka</h2>
                    <div className="">
                        <ul>
                            <li>tania wysylka</li>
                            <li>tania wysylka</li>
                            <li>tania wysylka</li>
                        </ul>
                    </div>

                    <h2 className="text-xl">Płatności</h2 >
                </div>


            </main>
        </>

    )
};

export default Checkout;