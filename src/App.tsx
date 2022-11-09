import './App.css';

import { ThemeContext, useTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './pages/global/topBar/Topbar';
import { AppRouter } from './router/router';
import SideBar from './pages/global/sideBar';

function App() {
  const { value, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={value}>
        <CssBaseline />
        <div className='App'>
          <SideBar />
          <main className='content'>
            <Topbar />
            <AppRouter />
          </main>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
