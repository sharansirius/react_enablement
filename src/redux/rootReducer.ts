import { combineReducers } from 'redux';
import blogs from './blogs/blogsReducer';
import theme from './theme/themeReducer';
import selectedBlog from './selectedBlog/selectedBlogReducer';
import filters from './filters/filtersReducer';

const rootReducer = combineReducers({
    blogs,
    theme,
    selectedBlog,
    filters
});

export default rootReducer;
