import { FILTER_INIT, UPDATE_FILTER, ADD_FILTER } from "./filtersTypes";
export const initFilters = (filters:Array<Filter>) => ({type:FILTER_INIT, filters});
export const updateFilter = (filter:Filter,index:number) => ({type:UPDATE_FILTER, filter,index});
export const addFilters = (filters:Array<Filter>) => ({type:ADD_FILTER, filters});