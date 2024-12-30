import React from "react";
import TopTitle from "../common/TopTitle.tsx";

const About: React.FC = () => {
    return (
        <>
            <TopTitle title="O nas" subTitle="poznaj nas bliżej"/>
            <main className="max-w-screen-xl mx-auto text-justify p-12 animate-fadeIn">
                <p>Kwiaciarnia Róża, nieprzerwanie od trzydziestu lat działa na rynku ogólnopolskim jak i
                    zagranicznym,&nbsp;<b>dostarczając <a href="https://roza-kwiaty.pl/kategoria-produktu/kwiaty/">kwiaty
                        i prezenty</a></b> wprost pod drzwi klienta. Najczęściej naszych kurierów kwiatowych można
                    spotkać na terenie: Gliwic, Zabrza, Knurowa, Bytomia czy Katowic. Posiadamy również oddziały swoich
                    e-kwiaciarń w kilku miastach w Polsce: Tychy, Grudziądz oraz Częstochowa. Zaufało nam liczne grono
                    Klientów, dzięki którym możemy oferować swoje usługi jeszcze szerzej i dalej poprzez prowadzoną <b>pocztę
                        florystyczną</b>, Wasze <b>e-kwiaty</b> docierają w najodleglejsze zakątki świata. Nasza
                    misja? <b>Spełnić każde życzenie naszych Klientów</b> i upiększyć im wszystkie okazje cudowną oprawą
                    florystyczną.</p>
                <p>Wiemy, że w pędzie dzisiejszego życia trudno znaleźć czas na wybór, kupno oraz odbiór <b>kwiatów i
                    upominków</b>. Od tego
                    właśnie jesteśmy my. Nie tylko fachowo doradzimy i dobierzemy odpowiedni gatunek kwiatów i upominków
                    do okoliczności, ale także nasza niezawodna poczta kwiatowo-prezentowa, poprzez współpracujące z
                    nami lokalne kwiaciarnie, doręczy je pod wskazany adres. Nie musicie się niczym martwić, nasz zespół
                    profesjonalistów wprowadzi Państwa w niesamowity świat kwiatów i aranżacji kwiatowych. Kwiaciarnia
                    Róża, działająca na terenie Gliwic, Zabrza, Knurowa i wszystkich innych miast na terenie Polski jak
                    i za granicą,&nbsp;oferuje <b>szeroki asortyment upominków, produktów delikatesowych oraz
                        kwiatów</b>, nawet tych najtrudniej dostępnych gatunków: kwiaty egzotyczne, kwiaty polne czy
                    kwiaty szklarniowe – wszystkie je znajdziecie w Kwiaciarni Róża.</p>
                <p>A więc 1 2 3 kwiaty do wysyłki zleć już dziś.</p>

                <div className="flex justify-center items-center pt-9">
                    <img
                        width={958}
                        height={232}
                        src="https://roza-kwiaty.pl/wp-content/uploads/2017/12/onas2.jpg"
                        className="vc_single_image-img attachment-full"
                        alt="Baner- O nas"
                        loading="lazy"
                        srcSet="https://roza-kwiaty.pl/wp-content/uploads/2017/12/onas2.jpg 958w, https://roza-kwiaty.pl/wp-content/uploads/2017/12/onas2-300x73.jpg 300w, https://roza-kwiaty.pl/wp-content/uploads/2017/12/onas2-768x186.jpg 768w, https://roza-kwiaty.pl/wp-content/uploads/2017/12/onas2-600x145.jpg 600w"
                        sizes="(max-width: 958px) 100vw, 958px"
                    />
                </div>

                <h2>Okazje na jakie wysyłamy kwiaty i prezenty</h2>

                <p>
                    Kwiaciarnia Róża oferuje usługę{" "}
                    <b>doręczania kwiatów oraz upominków</b> z okazji,
                    których w ciągu roku jest wiele, by sprawić radość
                    i przywołać uśmiech na twarzy bliskiej osoby, ale
                    także aby ułatwić wybór stworzyliśmy w naszym{" "}
                    <b>internetowym sklepie</b> zakładkę{" "}
                    <strong>Okazje</strong>, w której święta zostały
                    pogrupowane i podzielone na kategorie:{" "}
                    <b>
                        miłość, rocznice, podziękowania, gratulacje,
                        kondolencje/pogrzeb, dla mężczyzny, dla kobiety,
                        na ślub
                    </b>
                    . Wiemy, że są okazje szczególne, o których nie
                    sposób zapomnieć, na które nasi Floryści
                    przygotowują wyjątkowe kompozycje. Są to:{" "}
                    <a href="https://roza-kwiaty.pl/kategoria-produktu/okazje/">
                        <b>
                            kwiaty na walentynki, kwiaty dla mamy, kwiaty
                            dla babci, kwiaty na urodziny, kwiaty na
                            imieniny, kwiaty na ślub, kwiaty na rocznicę,
                            kwiaty na pogrzeb{" "}
                        </b>
                    </a>
                    i z okazji, których jest o wiele więcej niż
                    napisaliśmy, aby ofiarować kwiaty czy prezenty.
                    Dzięki tym kategoriom szybko i sprawnie dokonacie
                    Państwo wyboru bukietu czy upominku nie wychodząc
                    z domu. Wysyłka kwiatów realizowana przez naszą
                    kwiaciarnię to 100% gwarancja zadowolenia. Kurier
                    z <b>poczty kwiatów i bukietów</b> dowiezie
                    Państwa przesyłkę ekspresowo. Dostarczane kwiaty i
                    prezenty będą odpowiednio zabezpieczone. Doskonale
                    wiemy, że każde złożone zamówienie jest ważne,
                    więc na pewno kwiaty i wybrany upominek, który u
                    nas Państwo zamówią, dotrze na czas. Nie tylko na
                    terenie Gliwic, Zabrza, Knurowa, ale w dowolnie
                    wskazane przez Państwa miejsce. Zamówienia można
                    składać online, telefonicznie lub bezpośrednio w
                    gliwickiej stacjonarnej kwiaciarni Róża.
                </p>


            </main>
        </>)
}
export default About;