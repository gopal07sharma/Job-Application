import  axios  from "axios";

export const apiCall = async ()=>{
    console.log('enter 1');
    const response = await axios.get(import.meta.env.VITE_JOB_URL)
    console.log('enter');
    console.log('Jobs are ', response.data)
    return response;
}