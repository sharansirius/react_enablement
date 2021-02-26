import { combineReducers } from 'redux';
import theme from './theme';
import blogs from './blogs';
import selectedBlog from './selectedBlog';
import filters from './filters';

const blogApp = combineReducers({
    blogs,
    theme,
    selectedBlog,
    filters
});

export default blogApp;
