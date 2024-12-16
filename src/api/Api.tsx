import axios from "axios";

const fetchData = async (name: string): Promise<object> => {
    try{
        const res = await axios.get<object>(`https://node.pietyga.com.pl/${name}`);
        console.log(res.data);
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}


export default fetchData("products")

