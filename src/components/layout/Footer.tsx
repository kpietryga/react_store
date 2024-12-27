import {ADDRESS, CITIES, EMAIL, PHONE_NUMBERS} from "../common/ContactData.tsx";


const Footer = () => {
const divClass = "flex-1 p-6 bg-gray-100 rounded-xl m-6"
    return (
        <footer className="footer ">
            <div className="max-w-7xl text-center m-auto flex justify-between p-9">
                <div className="flex-1 p-6 bg-gray-100 rounded-xl m-6">Oferujemy bukiety, upominki i kosze na każdą możliwą okazję. Dzięki
                    wieloletniemu doświadczeniu we florystyce spełnimy wszystkie Twoje życzenia.
                </div>
                <ul className={divClass}>
                    Godziny otwarcia
                    <li>Poniedziałek-Piątek: 7:00 - 19:00</li>
                    <li>Sobota: 7:00 - 19:00</li>
                    <li>Niedziela: 9:00 - 17:00</li>
                </ul>
                <div className={divClass}>
                    <p>{ADDRESS.street} {ADDRESS.streetNumber}</p>
                    <p>{ADDRESS.postNumber} {ADDRESS.city}</p>

                    <ul>
                        {PHONE_NUMBERS.map((nr, i) => (
                            <li key={"nr" + i}>{nr}</li>
                        ))}
                    </ul>

                    <p>{EMAIL}</p>
                </div>
                <div className={divClass}>
                    <p className="font-bold">Obsługiwane miasta:</p>
                    {CITIES.map((city, i) => (<div key={"nr" + i} className="inline-block ml-1"> {city} </div>))}
                </div>
            </div>

            <div className=" bg-[#272829] text-white p-9">
                <div className="max-w-7xl text-center m-auto">
                    <p>© 2024 Moja Firma. Wszystkie prawa zastrzeżone.</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;