import React from "react";
import { Activity } from "./features/activity/Activity";

import { ChakraProvider, Box } from '@chakra-ui/react'
import Habit from "./features/habit";


function App() {
  return (
    <div className="App">
      <ChakraProvider>

        <Box display="flex" alignItems="center" justifyContent="space-between" marginLeft="40%">
          <Habit />
        </Box>

      </ChakraProvider>
    </div>
  );
}
export default App;