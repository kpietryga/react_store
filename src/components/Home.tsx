import React from "react";
import { HomeIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
    return (

        <div className="flex items-center space-x-4 p-4 bg-gray-100">
            <HomeIcon className="h-6 w-6 text-blue-500"/>
            <h1 className="text-4xl font-bold text-blue-500 m-10">Strona główna</h1>
        </div>


    )
}

export default Home;