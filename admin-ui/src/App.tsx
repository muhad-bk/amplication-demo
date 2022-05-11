import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AuthenticationStrategyList } from "./authenticationStrategy/AuthenticationStrategyList";
import { AuthenticationStrategyCreate } from "./authenticationStrategy/AuthenticationStrategyCreate";
import { AuthenticationStrategyEdit } from "./authenticationStrategy/AuthenticationStrategyEdit";
import { AuthenticationStrategyShow } from "./authenticationStrategy/AuthenticationStrategyShow";
import { UserAuthenticationStrategyList } from "./userAuthenticationStrategy/UserAuthenticationStrategyList";
import { UserAuthenticationStrategyCreate } from "./userAuthenticationStrategy/UserAuthenticationStrategyCreate";
import { UserAuthenticationStrategyEdit } from "./userAuthenticationStrategy/UserAuthenticationStrategyEdit";
import { UserAuthenticationStrategyShow } from "./userAuthenticationStrategy/UserAuthenticationStrategyShow";
import { BusinessList } from "./business/BusinessList";
import { BusinessCreate } from "./business/BusinessCreate";
import { BusinessEdit } from "./business/BusinessEdit";
import { BusinessShow } from "./business/BusinessShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AuthenticationStrategy"
          list={AuthenticationStrategyList}
          edit={AuthenticationStrategyEdit}
          create={AuthenticationStrategyCreate}
          show={AuthenticationStrategyShow}
        />
        <Resource
          name="UserAuthenticationStrategy"
          list={UserAuthenticationStrategyList}
          edit={UserAuthenticationStrategyEdit}
          create={UserAuthenticationStrategyCreate}
          show={UserAuthenticationStrategyShow}
        />
        <Resource
          name="Business"
          list={BusinessList}
          edit={BusinessEdit}
          create={BusinessCreate}
          show={BusinessShow}
        />
      </Admin>
    </div>
  );
};

export default App;
