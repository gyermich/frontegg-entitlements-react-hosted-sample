import './App.css';

import {
  AdminPortal,
  ContextHolder,
  useAuth
} from "@frontegg/react";

import { useEffect } from 'react';

const App = () => {
    const { isAuthenticated } = useAuth();

    const showAdmin = () => {
        AdminPortal.show();
    };

    useEffect(() => {
        if (isAuthenticated) {
            showAdmin();
        }
    }, [isAuthenticated]);

    const logOut = () => {
        const { baseUrl } = ContextHolder.getContext();
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };
    return (
        <div className="App">
       <div>
                <button type="submit" onClick={showAdmin} variant="primary" size="large">
                    Manage API Access
                </button>

                <button type="submit" onClick={logOut} variant="secondary" size="large">
                    Logout
                </button>
        </div>
        </div>
    );
};

export default App;
