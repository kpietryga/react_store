import {Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import {ChevronDownIcon} from "@heroicons/react/16/solid";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({header, ...rest}) => (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionItem>

                <AccordionItem header="Bytom">
                    Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                    erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                    erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                    erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                    erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
                </AccordionItem>

                <AccordionItem header="Katowice">
                    Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                    Fusce vulputate purus sed tempus feugiat.Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                    Fusce vulputate purus sed tempus feugiat.Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                    Fusce vulputate purus sed tempus feugiat.Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                    Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>
            </Accordion>
        </div>
    );
}