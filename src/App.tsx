import './App.css';

import { ThemeContext, useTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './pages/global/topBar/Topbar';
import { AppRouter } from './router/router';

import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from './pages/global/sideBar';

function App() {
  const { value, toggleTheme } = useTheme();

  return (
    <ProSidebarProvider>
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
    </ProSidebarProvider>
  );
}

export default App;
