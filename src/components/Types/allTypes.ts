export type TBean = {
    beanId: number,
    groupName: string[],
    ingredients: string[],
    flavorName: string,
    description: string,
    colorGroup: string,
    backgroundColor: string,
    imageUrl: string,
    glutenFree: boolean,
    sugarFree: boolean,
    seasonal: boolean,
    kosher: boolean
}

export type TFact = {
    description: string;
    factId: number;
    title: string;
};
  
export type TPage = {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
};
  
export type TRecipe = {
    additions1: string[];
    additions2: string[];
    additions3: string[];
    cookTime: string;
    description: string;
    directions: string[];
    imageUrl: string;
    ingredients: string[];
    makingAmount: string;
    name: string;
    prepTime: string;
    recipeId: number;
    tips: string[];
    totalTime: string;
};
  
export type TCombination = {
    combinationId: number;
    name: string;
    tag: string[];
};
  
export type THistory = {
    description: string;
    mileStoneId: number;
    year: number;
};