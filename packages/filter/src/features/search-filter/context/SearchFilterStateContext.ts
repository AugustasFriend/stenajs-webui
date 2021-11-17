import { createContext, useContext } from "react";
import { SearchFilterState } from "../redux/SearchFilterRedux";

export const SearchFilterStateContext = createContext<
  SearchFilterState<unknown>
>((null as unknown) as SearchFilterState<unknown>);

export const useSearchFilterState = <
  TFormModel
>(): SearchFilterState<TFormModel> => {
  const c = useContext(SearchFilterStateContext);
  if (!c) {
    throw new Error("Missing search filter state context.");
  }
  return c as SearchFilterState<TFormModel>;
};
