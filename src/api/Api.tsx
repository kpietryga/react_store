import axios from "axios";

export const fetchData = async (name: string): Promise<object> => {
    try{
        const res = await axios.get<object>(`https://node.pietryga.com.pl/api/${name}`);
        console.log(res.data);
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}




