import axios, {isCancel, AxiosError} from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {

    getAll(){
        return axios.get(`https://localhost:7034/api/Customers`);
    },
    add(customer){
        console.log(customer)
        return axios.post(`https://localhost:7034/api/Customers`, customer);
    },
    update(){

    }
}