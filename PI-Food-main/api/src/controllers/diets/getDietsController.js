require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Diet } = require('../../db');

const getDietsController = async () => {
    //si existen datos en la db que los traiga
    const existingDiets = await Diet.findAll();
    if( existingDiets.length > 0) {
        const dietsArray = [];
        existingDiets.forEach((diet) => 
            dietsArray.push({
                name: diet.name,
                id: diet.id
            })
        );
        return dietsArray;
    }

    //de lo contrario que haga el llamado a la API

    const apiDiets = await axios.get(`/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

    const dietsArray = apiDiets.data.results
        .map((recipe)=> recipe.diets)
        .flat();

    //para quitar todos los datos duplicados usamos el Set
    const dietsNotDuplicated = [...new Set(dietsArray)];

    dietsNotDuplicated.forEach((element) => {
        Diet.findOrCreate({
            where: {
                name: element,
            },
        });
    });

    return dietsNotDuplicated;
}

module.exports = getDietsController;