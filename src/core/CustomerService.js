import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {

    getAll(){
        return axios.get(`https://localhost:7034/api/Customers`);
    },
    add(customer){
        return axios.post(`https://localhost:7034/api/Customers`, customer);
    },
    get(id){
        return axios.get(`https://localhost:7034/api/Customers/${id}`);
    },
    update(id, customer){
        return axios.put(`https://localhost:7034/api/Customers/${id}`, customer);
    }
}