import React, {ReactChildren, ReactChild} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogApp from '../../reducers';

interface AppConfigProps {
  children: ReactChild | ReactChildren
}
export const store = createStore(blogApp);

function AppConfig({children}:AppConfigProps) {
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default AppConfig;
