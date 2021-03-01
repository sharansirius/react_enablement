import React from 'react';
import './app.scss';
import './theme.scss';
import { useSelector } from 'react-redux';
import { Details, LeftNav, Blogs} from "./containers";

function App() {
  console.log("--- Container --- App init");
  const theme = useSelector((state:BlogAppStore) => state.theme)
  return (
    <div className={`app ${theme}`}>
      <LeftNav />    
      <Blogs />
      <Details />  
    </div>
  );
}

export default App;
