import React from "react";

interface TopTitleProps {
    title: string;
    subTitle: string;
}

const TopTitle: React.FC<TopTitleProps> = ({title, subTitle}) => {
    return (
        <div className="bg-custom-pattern bg-cover px-9 pt-10 pb-9 text-center">
            <h1 className=" font-extrabold text-4xl text-white mb-2">{title}</h1>
            <p className="text-white">{subTitle}</p>
        </div>
    )
}

export default TopTitle;


