import './App.css';

import { ThemeContext, useTheme } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './pages/global/TopBar/Topbar';
import { AppRouter } from './router/router';
import SidebarNav from './pages/global/Sidebar/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  const { value, toggleTheme } = useTheme();

  return (
    <ProSidebarProvider>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={value}>
          <CssBaseline />
          <div className='App'>
            <SidebarNav />
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
