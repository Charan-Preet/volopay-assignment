import DataContext from "../context";
import { useContext } from "react";

export default function NavBar() {
  const { yourTabData, setIntialData } = useContext(DataContext);
  return (
    <div className="pb6">
      <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a
            className="link dim white dib mr3 pointer"
            title="Home"
            onClick={() => {
              setIntialData();
            }}
          >
            Home
          </a>
          <a
            className="link dim white dib mr3 pointer"
            title="About"
            onClick={() => {
              yourTabData(1);
            }}
          >
            Your
          </a>
        </nav>
      </header>
    </div>
  );
}
