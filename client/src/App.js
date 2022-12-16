import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar, ThemeSettings, Login } from './components';
import { Calendar, Customers, Kanban , Principal, Message} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import { UserContext } from './contexts/UserContext';

const App = () => {
  const { currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const [user, setUser] = useState(null);
  const userProvider = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <UserContext.Provider value={userProvider}>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
          
          <div className="flex relative object-cover dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent
                content="Settings"
                position="Top"
              >
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>

              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && (<ThemeSettings />)}

                <Routes>
                  <Route path="/" element={<Principal />} />
                  {/* pages  */}
                  <Route path="/customers" element={<Customers />} />

                  {/* apps  */}
                  <Route path="/message" element={<Message />} />
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </div>
            </div>
          </div>
          <div hidden={user? true : false}>
            <Login/>
          </div>
        </BrowserRouter>
        
      </div>
    </UserContext.Provider>
  );
};

export default App;
