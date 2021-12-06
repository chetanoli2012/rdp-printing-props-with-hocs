import { printProps } from "./printprops";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return <UserInfoWrapped a={1} b={"hello"} c={{ name: "Shaun" }} />;
}

export default App;
