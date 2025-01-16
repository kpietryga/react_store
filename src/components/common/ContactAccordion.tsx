import {Accordion, AccordionItem} from '@szhsin/react-accordion';

export default function ContactAccordion() {
    return (
        <>
            <h2>Najczęściej zadawane Pytania</h2>

            <Accordion className="mt-5 border">
                <AccordionItem className="border" header={
                    <div>
                        <p className="border">What is Lorem Ipsum?</p>
                        <p className="bg-customRed">
                            Lorem ipsum is a placeholder text commonly used to
                            demonstrate the visual form of a document.
                        </p>
                    </div>
                }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem className="border" header="Where does it come from?">
                    Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                    vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                    vitae, accumsan auctor mi.
                </AccordionItem>

                <AccordionItem className="border" header="Why do we use it?">
                    Suspendisse massa risus, pretium id interdum in, dictum sit
                    amet ante. Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>
            </Accordion>
        </>
    );
}