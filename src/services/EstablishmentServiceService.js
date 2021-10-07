import src from "*.avif";

const establishmentServiceService = {
    products() {
        const srcs = [];
        const names = [];
        const amounts = [];
        const ingredients = [];
        const descriptions = [];

        let list = [
            {
                src: srcs,
                name: names,
                amount: amounts,
                ingredient: ingredients,
                description: descriptions,
            }
        ];
        return list;
    },

}