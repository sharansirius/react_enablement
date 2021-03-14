import { combineReducers } from 'redux';
import blogs from './blogs/blogsReducer';
import theme from './theme/themeReducer';
import members from './members/membersReducer'
const rootReducer = combineReducers({
    blogs,
    theme,
    members
});

export default rootReducer;
