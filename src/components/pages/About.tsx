import React from "react";
import TopTitle from "../common/TopTitle.tsx";

const About: React.FC = () => {
    return (
        <>
            <TopTitle title="O nas" subTitle="poznaj nas bliżej"/>
            <main className="max-w-screen-xl mx-auto text-justify p-12">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque ea error eum fuga illo
                    porro quod temporibus vero voluptatem! Earum eos excepturi illum itaque odit omnis, placeat quod?
                    Asperiores?
                </div>
            </main>
        </>)
}
export default About;