import "./App.css";
import "tabler-react/dist/Tabler.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import ServersPage from "./pages/servers/serversPage";
import HomePage from "./pages/home/homePage";
import UsersPage from "./pages/users/usersPage";
import TransactionPage from "./pages/transaction/transactionPage";
import SettingPage from "./pages/setting/settingPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/servers" component={ServersPage}></Route>
        <Route path="/users" component={UsersPage}></Route>
        <Route path="/transaction" component={TransactionPage}></Route>
        <Route path="/setting" component={SettingPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
