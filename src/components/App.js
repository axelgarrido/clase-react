import "../assets/css/app.css";
import ContentWrapper from "./ContentWrapper";
import Sidebar from "./SideBar";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;