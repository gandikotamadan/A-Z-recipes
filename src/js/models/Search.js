import axios from 'axios';
import { key, proxy } from '../config';

export default class Search{
    constructor(query){
    this.query=query;
    }
    
    async getResults(){
        //fetching API using axios
        try{
            
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result=res.data.recipes;
            
        }catch(error){
            console.log(error);
            alert(error);
        }    
}
}

