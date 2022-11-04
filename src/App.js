import React from "react";
import { Wrapper, Hello } from "./styled";
import Globe from "./features/GlobePage/GlobeComponent";


function App() {
  return (
    <Wrapper>
      <Hello>
        <Globe />
        hello World !
      </Hello>
   </Wrapper> 
  );
}

export default App;



