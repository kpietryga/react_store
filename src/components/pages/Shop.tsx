import PromotedProducts from "../common/Products.tsx";
import TopTitle from "../common/TopTitle.tsx";
import React from "react";
//import hero from '../../assets/hero.jpg';
//import rozaLogo from "../../assets/roza-logo.png";

const Shop: React.FC = () => {

    return (
        <>
            <TopTitle title="Produkty" subTitle="sprawdź nasze niesamowite produkty"/>
            <main className="max-w-screen-xl mx-auto text-justify px-12 animate-fadeIn flex">


                <div>
                    <div className="flex flex-col ">

                        <h2 className="text-2xl font-bold text-customRed m-10 text-center">Najchetniej kupowane</h2>
                        <PromotedProducts/>

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo non praesentium quae
                            quia quibusdam reiciendis repellat, sapiente tenetur totam. Ab aperiam fuga id ipsam nihil
                            nostrum pariatur saepe vitae.
                        </div>
                        <div>Cumque deleniti dignissimos doloremque et harum laboriosam magni nesciunt obcaecati omnis,
                            quasi reiciendis saepe soluta tempore vitae voluptas voluptatem voluptates. Architecto earum
                            libero nihil quam quibusdam quo ratione, soluta tempore.
                        </div>
                        <div>Aperiam, blanditiis cupiditate debitis delectus dignissimos dolor laudantium perspiciatis quos?
                            Praesentium quam, quasi. Debitis ducimus exercitationem quidem quo sapiente soluta, voluptatem.
                            Dolorum expedita officia repellat unde voluptatem! Aspernatur error, veniam.
                        </div>
                        <div>Aliquam consectetur culpa cumque cupiditate deserunt dignissimos eligendi explicabo facilis
                            harum ipsa itaque iure laborum molestiae obcaecati praesentium quam quisquam, quos recusandae
                            repellat sed sint sunt suscipit tempore totam voluptatum!
                        </div>
                        <div>Dicta eaque earum harum labore maiores officiis quo rem repudiandae similique sunt? Accusantium
                            ad assumenda consequatur dolorum, est eveniet expedita, hic impedit ipsam minima numquam, odio
                            perspiciatis quisquam veritatis voluptate!
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2>Filters</h2>

                </div>





            </main>
        </>


    )
}

export default Shop;