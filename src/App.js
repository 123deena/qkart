// import { Login } from "@mui/icons-material";
import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from "./components/Login";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import {Route,Switch} from "react-router-dom";
import Products from "./components/Products"

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      <Switch>
          
          <ThemeProvider theme={theme}>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/products">
              <Products />
            </Route>

          </ThemeProvider>
          </Switch>
          
          
    </div>
  );
}

export default App;
