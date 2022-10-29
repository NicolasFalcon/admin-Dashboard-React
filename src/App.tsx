import './App.css';

import { ThemeContext, useTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './pages/global/TopBar/Topbar';
import { AppRouter } from './router/router';
import Sidebar from './pages/global/Sidebar/Sidebar';

function App() {
  const { value, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={value}>
        <CssBaseline />
        <div className='App'>
          <Sidebar />
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
