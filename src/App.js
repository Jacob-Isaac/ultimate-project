import React from "react";
import { Wrapper, Hello } from "./styled";
import Globe from "./features/GlobePage/GlobeComponent";
import MainPage from "./features/MainPage/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPageLoad } from "./features/DataSlice/dataSlice";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchPageLoad());
  }, [dispatch]);

  return (
    <Wrapper>
      {/* <Hello> */}
        <MainPage/>
         <Globe /> 
        {/* hello World ! */}
      {/* </Hello> */}
   </Wrapper> 
  );
}

export default App;



