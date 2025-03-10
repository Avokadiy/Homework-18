import { TBean, TCombinations, TFact, THistory, TRecipe } from "./allTypes";

type TState = {
    isLoading: boolean,
    isError: boolean,
}

type TPage = {
    currentPage: number,
    pageSize: number,
    totalCount: number,
    totalPages: number,
};

export type TBeanState = TState & {
  data: TBean | null;
}

export type TBeansState = TState & TPage & {
    data: TBean[];
}

export type TCombinationsState = TState & TPage & {
    data: TCombinations[];
  };

export type TFactsState = TState & TPage & {
    data: TFact[];
  };

export type THistoryState = TState & TPage & {
    data: THistory[];
  };

export type TRecipesState = TState & TPage & {
    data: TRecipe[];
  };