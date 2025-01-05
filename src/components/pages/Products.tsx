import PromotedProducts from "../common/PromotedProducts.tsx";
import TopTitle from "../common/TopTitle.tsx";
import React from "react";
import hero from '../../assets/hero.jpg';
//import rozaLogo from "../../assets/roza-logo.png";

const Products: React.FC = () => {

    return (
        <>
            <TopTitle title="Produkty" subTitle="sprawdź nasze niesamowite produkty"/>
            <main className="max-w-screen-xl mx-auto text-justify px-12 animate-fadeIn">


                <section className="bg-white text-gray-700">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={hero} alt="product" />
                                </div>
                                <div className="absolute top-0 m-2 rounded-full bg-white">
                                    <p className="rounded-full bg-customRose p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                </div>
                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition  group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={hero} alt="product" />
                                </div>
                                <div className="absolute top-0 m-2 rounded-full bg-white">
                                    <p className="rounded-full bg-customRose p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                </div>
                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                        src={hero} alt="product"/>

                                </div>

                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                        src={hero} alt="product"/>

                                </div>

                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                        src={hero} alt="product"/>

                                </div>

                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                        src={hero} alt="product"/>

                                </div>

                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                        src={hero} alt="product"/>

                                </div>

                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>

                            <article className="relative flex flex-col overflow-hidden rounded-lg border">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                                        src={hero} alt="product"/>

                                </div>
                                <div className="absolute top-0 m-2 rounded-full bg-white">
                                    <p className="rounded-full bg-customRose p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                </div>
                                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div className="mb-2 flex">
                                        <p className="mr-3 text-sm font-semibold">$99.00</p>
                                        <del className="text-xs text-gray-400"> $79.00</del>
                                    </div>
                                    <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
                                </div>
                                <button
                                    className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div
                                        className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-customRed group-hover:text-white">Dodaj do koszyka
                                    </div>
                                    <div
                                        className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-customRose group-hover:text-white">+
                                    </div>
                                </button>
                            </article>
                        </div>
                    </div>
                </section>


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
                <PromotedProducts/>
            </main>
        </>


    )
}

export default Products;