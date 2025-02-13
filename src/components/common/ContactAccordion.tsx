import {Accordion, AccordionItem as Item, AccordionItemProps} from "@szhsin/react-accordion";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import React from "react";
import {ADDRESS} from "./ContactData.tsx";

interface AccordionItemType extends AccordionItemProps {
    header: React.ReactNode;
}

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem: React.FC<AccordionItemType> = ({header, ...rest}) => (
    <Item
        {...rest}
        header={({state: {isEnter}}) => (
            <>
                {header}
                <ChevronDownIcon  className={`w-8 h-8 ml-auto transition-transform duration-200 ease-out ${
                    isEnter && "rotate-180"
                }`}/>

            </>
        )}
        className="border-b "
        buttonProps={{
            className: ({isEnter}) =>
                `flex font-bold  items-center w-full p-4 text-left hover:bg-customRed ${
                    isEnter && "bg-customRed"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{className: "p-4"}}
    />
);

export default function App() {
    return (
        <div className="mx-2 mb-9 border-t">
            {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
            <Accordion transition transitionTimeout={200}>
                <AccordionItem header="Gliwice" initialEntered>
                    <p className="mt-2">{ADDRESS.street} {ADDRESS.streetNumber}</p>
                    <p>{ADDRESS.postNumber} {ADDRESS.city}</p>
                </AccordionItem>

                <AccordionItem header="Bytom">
                    <p className="mt-2">{ADDRESS.street} {ADDRESS.streetNumber}</p>
                    <p>{ADDRESS.postNumber} {ADDRESS.city}</p>
                </AccordionItem>

                <AccordionItem header="Katowice">
                    <p className="mt-2">{ADDRESS.street} {ADDRESS.streetNumber}</p>
                    <p>{ADDRESS.postNumber} {ADDRESS.city}</p>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

