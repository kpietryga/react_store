import React from "react";
import {ADDRES, EMAIL, TEL} from "../common/ContactData.tsx";
import {EnvelopeIcon, PhoneIcon, GlobeAltIcon} from "@heroicons/react/24/outline";
import TopTitle from "../common/TopTitle.tsx";
import map from '../../assets/map.png';


const Contact: React.FC = () => (

    <>
        <TopTitle title="Kontak" subTitle="zostaw nam wiadomośc"/>
        <main className="max-w-screen-xl mx-auto text-center p-12">
            <div>
                <div className="flex justify-around align-items-center mb-9 ">
                    <div className="p-9 shadow-lg rounded-xl bg-slate-50">
                        <EnvelopeIcon className="h-20 w-20 text-customRed "/>
                    </div>
                    <div className="p-9 shadow-lg rounded-xl bg-slate-50">
                        <PhoneIcon className="h-20 w-20 text-customRed "/></div>
                    <div className="p-9 shadow-lg rounded-xl bg-slate-50">
                        <GlobeAltIcon className="h-20 w-20 text-customRed "/></div>
                </div>

                <div className="container flex mb-9">


                    <div className=" text-left flex-1 max-w-56">
                        <h2 className="text-2xl font-bold text-customRed mb-6">Kontakt</h2>
                        <p>{ADDRES.street + " " + ADDRES.streetNumber}</p>
                        <p>{ADDRES.postNumber + " " + ADDRES.city}</p>

                        <div className="top-cotact-container flex-col items-center justify-center mt-5">
                            <div className="phone flex items-center">
                                <a href={"tel:" + TEL} className="flex gap-3">
                                    <PhoneIcon className="h-5 w-5 text-customRed "/>
                                    <p className="text-customBlack ">{TEL}</p></a>
                            </div>
                            <div className="mail flex items-center">
                                <a href={"mailto:" + EMAIL} className="flex gap-3"> <EnvelopeIcon
                                    className="h-5 w-5 text-customRed "/> <p
                                    className="text-customBlack ">{EMAIL}</p></a>
                            </div>
                        </div>


                    </div>
                    <div className=" text-left flex-1">
                        <img src={map} alt="map"/>
                        {/*<iframe title="google-map"*/}
                        {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.4586483666812!2d18.67881607688002!3d50.302032398038655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471131d294b22bff%3A0x1dbe9f456e36a02a!2zS3dpYWNpYXJuaWEgUsOzxbxh!5e0!3m2!1spl!2spl!4v1734613167203!5m2!1spl!2spl"*/}
                        {/*    width="100%" height="450" loading="lazy"*/}
                        {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}

                    </div>
                </div>
            </div>
        </main>
    </>


);

export default Contact;