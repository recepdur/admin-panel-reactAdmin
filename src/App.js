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

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com")
const App = () => (
  <Admin
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