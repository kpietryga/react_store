import Slider from "react-slick";

interface ArrowProps {
    readonly className: string;
    readonly style: object;
    readonly onClick: () => void;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
    return (
        <button
            className={className}
            style={{ ...style, right: 10 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
    return (
        <button
            className={className}
            style={{ ...style, left: 10 }}
            onClick={onClick}
        />
    );
}

const MainSlider = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        nextArrow: <SampleNextArrow className={""} style={{}} onClick={function(): void {
            throw new Error("Function not implemented.");
        } } />,
        prevArrow: <SamplePrevArrow className={""} style={{}} onClick={function(): void {
            throw new Error("Function not implemented.");
        } } />,
    };

    return (
        <div className="slider-container max-w-7xl bg-custom-pattern bg-cover">
            <Slider {...settings}>
                <div>
                    <div
                        className="max-w-7xl m-auto min-h-80 p-9 text-xl flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-white text-left animate-fadeIn">Super Promocja</h1>
                        <div className="overflow-hidden">
                            <h2 className="text-2xl text-white font-bold animate-fadeIn">Spraw radość twoim
                                bliskim</h2>
                        </div>
                    </div>
                </div>
                <div>
                        <div
                            className="max-w-7xl m-auto min-h-80 p-9 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold text-white text-left animate-fadeIn">Tylko teraz</h1>
                            <div className="overflow-hidden">
                                <h2 className="text-2xl text-white font-bold animate-fadeIn">Bukiety na zamowienie
                                    bliskim</h2>
                            </div>
                        </div>
                </div>
                <div>
                    <div
                        className="max-w-7xl m-auto min-h-80 p-9 text-xl flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-white text-left animate-fadeIn">Kwiaciarnia Róża</h1>
                        <div className="overflow-hidden">
                            <h2 className="text-2xl text-white font-bold animate-fadeIn">-50% na wszystko</h2>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default MainSlider;