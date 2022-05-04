import { createContext, useEffect, useState } from "react";
import callApi from "../shareables/CallApi";

const DataContext = createContext();
const DataContextProvider = (props) => {
  //declarations
  const [intialData, setInitialData] = useState();
  const [tempData, setTempData] = useState();
  const [offsetLimit, setOffsetLimit] = useState(1);
  const env = "http://localhost:4000/";
  //async task's
  const setIntialData = async () => {
    try {
      let sendData = [];
      const iniRes = await callApi(`${env}data?_page=${offsetLimit}`);
      if (intialData) {
        sendData.push(...iniRes);
        sendData.push(...intialData);
        setInitialData(sendData);
      } else setInitialData(iniRes);
    } catch (e) {
      console.error(e);
    }
  };

  const increaseOffSet = () => setOffsetLimit(offsetLimit + 1);

  //this function is the first that will run as soon as our homepage
  // get's mounted on initial render
  useEffect(() => {
    setIntialData();
  }, [offsetLimit]);

  const yourTabData = async (owner_id) => {
    try {
      const iniRes = await callApi(`${env}data?owner_id=${owner_id}`);
      setInitialData(iniRes);
    } catch (e) {
      console.error(e);
    }
  };
  // <<----- async task end's ------>>

  const searchName = (userName) => {
    if (userName === "") {
      if (tempData) setTempData(null);
      setOffsetLimit(-1);
    } else {
      let temp = [];
      let searchAbleData;
      if (tempData) searchAbleData = tempData;
      else {
        searchAbleData = intialData;
        setTempData(intialData);
      }
      let user = userName.toLowerCase();
      if (/\s/g.test(user)) user = user.replace(" ", "");
      for (let i = 0; i < searchAbleData.length; i++) {
        let iterativeName = searchAbleData[i].name
          .toLowerCase()
          .replace(" ", "");
        if (iterativeName === user) {
          temp.push(searchAbleData[i]);
        }
      }
      setInitialData(temp); //pushing the searched data for render
    }
  };

  //listening to scroll event on page for infinite scroll
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight &&
      !tempData
    ) {
      setOffsetLimit(offsetLimit + 1);
    }
  });

  return (
    <DataContext.Provider
      value={{
        setIntialData,
        yourTabData,
        intialData,
        increaseOffSet,
        searchName,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataContextProvider };
