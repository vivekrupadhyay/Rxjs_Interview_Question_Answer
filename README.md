# Rxjs_Interview_Question_Answer

// ASSIGNMENT: Make a cake using only fruits from the ingredient$ stream. After having added all ingredients, make sure to bake

// the cake, so it's actually edible.

//

// HINT: Start by selecting the ingredients that you are going to use for the cake. Use the following expression to check if an ingredient

// is fruit:

//

//   ingredient.type === 'FRUIT'

//

// HINT: When making the cake start with an "empty" cake: new Cake('Fruitcake') and add the fruit ingredients to it you obtained from

// the ingredient$ stream. This should be done using only RxJS streams and operators!

//

// HINT: You can add an ingredient to a cake using the addIngredient(ingredient) function. Calling this function will return a (new) cake

// that includes the specified ingredient.

//

// HINT: You will need to transform the stream of fruit ingredients into a stream of a (single) cake. Think about which operator will allow

// you to make this transformation.

//

// HINT: To bake the cake, use the bake() method of the Cake class.

//

// HINT: The stream should only emit the complete cake, NOT the partially constructed cakes.

 

 

const ingredient$ = of(

    new Ingredient("Flour", "BASE"),

    new Ingredient("Sugar", "SWEET"),

    new Ingredient("Strawberry", "FRUIT"),

    new Ingredient("Salt", "BASE"),

    new Ingredient("Pineapple", "FRUIT")

);
