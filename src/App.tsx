import { ChakraProvider } from '@chakra-ui/react';
import { TopMenu } from "./components/TopMenu/TopMenu";
import { ContentComponent } from './components/ContentComponent/ContentComponent';

import './styles/style.css'

function App() {
  return (
    <ChakraProvider>
      <TopMenu />
      <ContentComponent />
    </ChakraProvider>
  );
}

export default App;
