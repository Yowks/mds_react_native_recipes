import { useState } from "react";
import Spoonacular from "../API/Spoonacular";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try{
            const response = await Spoonacular.get('/complexSearch', {
                params: {
                    apiKey: 'b70cb5faaf084f479eb9b3ff1c7a2c34',
                    number: 100
                }
            });
            setResults(response.data);
        }

        catch (e) {
            setErrorMessage("Something went wrong!");
        }
    };

    return [searchApi, results, errorMessage];

};
