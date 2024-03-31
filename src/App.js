import Maain from "./Pages/Maain";
import SettingsPage from "./Pages/SettingsPage";
import Home from "./Pages/Home";
import './Styles/Style.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { setupNotifications } from './firebase';
import { toastNotification, sendNativeNotification } from './notificationHelpers';
import useVisibilityChange from './useVisibilityChange';
import { register } from './serviceWorker';


function App() {

  const isForeground = useVisibilityChange();
  useEffect(() => {
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title,
          description: body,
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title,
          body,
        });
      }
    });
  }, []);



  
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Home" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Maain />
              </ProtectedRoute>
            }
          />
          <Route path="Home/" element={<Home />} />
          <Route path="SettingsPage/" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
