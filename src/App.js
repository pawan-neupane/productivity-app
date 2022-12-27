import React from "react";
import { Activity } from "./features/activity/Activity";

import { ChakraProvider,Box } from '@chakra-ui/react'
import { Cardd } from "./features/card";


function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <ChakraProvider>

<Box display="flex" alignItems="center" justifyContent="space-between" marginLeft="40%">
<Cardd />

</Box>

        
      {/* <Activity /> */}
      </ChakraProvider>
    </div>
  );
}

export default App;