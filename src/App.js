import logo from './logo.svg';
import Home from './pages/Home';
// import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
     <Home/>
     </ThemeProvider>
    </div>
  );
}

export default App;
