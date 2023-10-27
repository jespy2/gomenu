import React, {Dispatch, SetStateAction} from 'react';

import apis from "../../api";
import { IRecipe } from "../../index.types";

interface IGetAllRecipesProps {
  setAllRecipes: Dispatch<SetStateAction<IRecipe[] | undefined>>;
  setIsMounted: Dispatch<SetStateAction<boolean>>;
}

export const runGetAllRecipes = async (props: IGetAllRecipesProps) => {
  const { setAllRecipes, setIsMounted } = props;

  await apis.getAllRecipes()
    .then((data) => {
      setAllRecipes(data.data as IRecipe[]);
      setIsMounted(true);
    });
  }

  interface IGlobalSearchProps {
    globalSearch: string;
    allRecipes: IRecipe[] | undefined;
    setAllRecipes: Dispatch<SetStateAction<IRecipe[] | undefined>>;
  }

export const runGlobalSearch = async (props: IGlobalSearchProps) => {
  const { globalSearch, allRecipes, setAllRecipes } = props;
  globalSearch && await apis.searchCookbook(globalSearch)
    .then((data) => {
      const _data = data.data ? data.data : allRecipes
      setAllRecipes(_data as IRecipe[]);
    });
}