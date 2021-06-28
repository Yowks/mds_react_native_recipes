import axios from "axios";

export default axios.create({

    baseURL: 'https://api.spoonacular.com/recipes',
    headers: {
        Authorization : 'Bearer b70cb5faaf084f479eb9b3ff1c7a2c34'
    }
}); 