
import TopTitle from "../common/TopTitle.tsx";

// const useInput = (initialValue: string) => {
//     const [value, setValue] = useState(initialValue);
//     const [touched, setTouched] = useState(false);
//     return {
//         value,
//         setValue,
//         touched,
//         setTouched,
//         reset: () => {
//             setValue('');
//             setTouched(false);
//         },
//         bind: {
//             value,
//             onChange: (e) => {
//                 setValue(e.target.value);
//                 setTouched(true);
//             }
//         }
//     }
// }
//
const Checkout: React.FC = () => {
    // const {
    //     value: firstName,
    //     touched: touchedFirstName,
    //     bind: bindFirstName,
    //     reset: resetFirstName
    // } = useInput('');

    return (
        <>
            <TopTitle title="Zamówenie" subTitle="Poznaj nasze usługi"/>
            <main className="max-w-screen-xl mx-auto text-justify p-12 animate-fadeIn">
                <div>
                    <div className="py-4"><label>Imię</label>
                        <input type='text' className="form-control border rounded-xl ml-2 border-gray-600" />
                    </div>
                    <div className="py-4"><label>Nazwisko</label>
                        <input type='text' className="form-control border rounded-xl ml-2 border-gray-600" />
                    </div>
                    <div className="py-4"><label>Adres</label>
                        <input type='text' className="form-control border rounded-xl ml-2 border-gray-600" />
                    </div>


                    <br/>
                    {/*{*/}
                    {/*    !error.firstName &&*/}
                    {/*    touchedFirstName &&*/}
                    {/*    <label className="text-danger">First Name error</label>*/}
                    {/*}*/}
                </div>

            </main>
        </>
    )
};

export default Checkout;