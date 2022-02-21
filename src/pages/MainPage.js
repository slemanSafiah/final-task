import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GroupedSections from "../components/GroupedSections";
import "../App.css";
import "../components/components.style.css";

function MainPage() {
  return (
    <div className="Main-page">
      <Navbar />
      <Sidebar />
      <GroupedSections />
    </div>
  );
}

export default MainPage;
