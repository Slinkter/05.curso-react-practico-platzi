import React from "react";
import {
    BrowserRouter as Router,
    Switch as Routes,
    Route,
} from "react-router-dom";
import Layout from "@containers/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
// Components
import Home from "@pages/Home";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
// Style
import "@styles/global.css";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Router>
                <Layout>
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/send-email" component={SendEmail} />
                        <Route path="/new-password" component={NewPassword} />
                        <Route path="/account" component={MyAccount} />
                        <Route path="/signup" component={CreateAccount} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route
                            path="/password-recovery"
                            component={PasswordRecovery}
                        />
                        <Route path="*" component={NotFound} />
                    </Routes>
                </Layout>
            </Router>
        </AppContext.Provider>
    );
};

export default App;
