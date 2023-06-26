const { Recipe, Diet } = require('../../db');
const { Op } = require('sequelize');

const postDataRecipe = async (recipeObj) => {
    const { title, summary, healthScore, steps, image, diets } = recipeObj;

    const newRecipe = await Recipe.create({
        title,
        summary,
        healthScore,
        steps,
        image, 
    });

    //obtenemos los tipos de dietas

    let findDiets = await Diet.findAll({
        where: {
            name: { [Op.iLike]: `%${diets}` },
        },
    });

    //asociamos los tipos de dieta a las recetas
    await newRecipe.addDiet(findDiets);

    const result = await Recipe.findOne({
        where: {
            id: newRecipe.id,
        },
        attributes: ['id', 'title', 'summary', 'healthScore', 'steps', 'image'],
        include: { model: Diet },
    });

    return result;
}

module.exports = postDataRecipe;