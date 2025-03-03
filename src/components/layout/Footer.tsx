import {ADDRESS, CITIES, EMAIL, PHONE_NUMBERS} from "../common/ContactData.tsx";
import rozaLogo from "../../assets/roza-logo.png";
const divClass = "py-6 w-56 text-white text-[14px] text-left"

const Footer = () => {

    return (
        <footer className="footer bg-[#272829]  ">
            <div className="max-w-7xl px-9 w-text-center m-auto flex justify-between flex-col md:flex-row">
                <div className={divClass + " text-left"}>
                    <img src={rozaLogo} alt="Logo" className="h-8 w-auto mb-2"/>
                    Oferujemy bukiety, upominki i kosze na każdą możliwą okazję. Dzięki
                    wieloletniemu doświadczeniu we florystyce spełnimy wszystkie Twoje życzenia.
                </div>

                <div className={divClass}>
                    <p className="font-bold mb-2">Godziny otwarcia</p>
                    <ul>
                        <li>Poniedziałek-Piątek: 7:00 - 19:00</li>
                        <li>Sobota: 7:00 - 19:00</li>
                        <li>Niedziela: 9:00 - 17:00</li>
                    </ul>
                    <p className="mt-2">{ADDRESS.street} {ADDRESS.streetNumber}</p>
                    <p>{ADDRESS.postNumber} {ADDRESS.city}</p>
                </div>

                <div className={divClass}>

                    <p className="font-bold mb-2">Kontakt</p>


                    <ul>
                        {PHONE_NUMBERS.map(nr => (
                            <li key={nr.tel}><a href={nr.url}> {nr.tel} </a></li>
                        ))}
                    </ul>

                    <p><a href={EMAIL}>{EMAIL}</a></p>
                </div>
                <div className={divClass}>
                <p className="font-bold mb-2">Obsługiwane miasta:</p>
                    {CITIES.map((city, i) => (<div key={"nr" + i} className="inline-block ml-1"> {city} </div>))}
                </div>
            </div>

            <div className="text-white p-9">
                <div className="max-w-7xl  text-[14px] text-center m-auto border-t-[1px] border-t-[#3B3C3D] pt-10">
                    <p>© 2024 Kwiaciarnia Róża. Wszystkie prawa zastrzeżone.</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;