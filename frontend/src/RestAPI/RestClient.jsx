import axios from 'axios'
export default class RestClient{
    static getRequest=(getUrl)=>{
        return axios.get(getUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        })
    }
}