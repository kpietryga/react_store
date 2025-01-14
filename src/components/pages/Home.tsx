import React from "react";
import PromotedProducts from "../common/PromotedProducts";

const Home: React.FC = () => {

    return (
        <>
            <div className="bg-custom-pattern bg-cover">
                <div className="max-w-7xl m-auto min-h-80 p-9 text-xl flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-white text-left animate-fadeIn">Kwiaciarnia Róża</h1>
                    <div className="overflow-hidden">
                        <h2 className="text-2xl text-white font-bold animate-fadeIn">Spraw radość twoim bliskim</h2>
                    </div>
                </div>
            </div>
            <main className="max-w-screen-xl mx-auto text-center px-9">

                <h2 className="text-2xl font-bold text-customRed m-10">Najchetniej kupowane</h2>
                <PromotedProducts/>
                <h2 className="text-2xl font-bold text-customRed m-10">Promocje</h2>
                <PromotedProducts/>
                <h2 className="text-2xl font-bold text-customRed m-10">Polecane</h2>
                    <PromotedProducts/>
                    <div className="my-9 flex gap-5 text-justify">
                        <div>Accusantium aliquid amet beatae dolores eum id libero mollitia odio temporibus vel.
                            Exercitationem
                            id iste
                            necessitatibus. A fuga nulla officia quia quibusdam similique voluptatem! Autem quae qui
                            ratione
                            tenetur
                            velit.
                        </div>
                        <div>Accusantium aliquam deleniti distinctio dolorem ea eos exercitationem in maiores
                            necessitatibus
                            nihil,
                            nostrum odio perferendis praesentium provident reiciendis sapiente sint? Atque dolorem
                            dolorum illum
                            inventore ipsa nostrum odio omnis provident!
                        </div>
                        <div>Deleniti doloremque qui saepe tempora? Cumque distinctio dolorem ducimus eaque expedita
                            minima
                            quasi unde.
                            Aliquam culpa laboriosam magnam quasi quibusdam repellendus sit tempora, ullam! Corporis
                            expedita
                            numquam
                            praesentium vel vitae?
                        </div>
                    </div>
            </main>
        </>
)
}

export default Home;