import axios, {type AxiosResponse} from "axios";  
// npm i axios
// npm i @types/axios -D


interface ToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<ToDo> = await axios.get("https://jsonplaceholdr.typicode.com/todos/1");
        console.log("ToDo: ", response.data);
    } catch (error: any){
        if (axios.isAxiosError(error)){
            console.log("Axios Error: ", error.message);
            if (error.response){
                console.log(error.response.status);
                console.log(error.response.data);
            }
        } 
    }
}

fetchData();