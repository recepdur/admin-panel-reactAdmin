import React from "react"
import { Admin, Resource } from "react-admin"
import { PostList, PostEdit, PostCreate } from "./posts"
import { UserList } from "./users"
import jsonServerProvider from "ra-data-json-server"
import authProvider from "./authProvider"
import PostIcon from "@material-ui/icons/Book"
import UserIcon from "@material-ui/icons/Group"
import HomeIcon from "@material-ui/icons/Home"
import Dashboard from "./Dashboard"
import { createMuiTheme } from '@material-ui/core/styles';

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com")
//const dataProvider = jsonServerProvider("http://localhost:3001")

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => (
  <Admin
    title="My Custom Admin"
    theme={theme}
    dashboard={Dashboard}
    authProvider={authProvider}
    icon={HomeIcon}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
)

export default App