import { useContext } from "react";
import DataContext from "../context";
import Search from "./Search";
import "./MainPage.css";

export default function MainPage() {
  const { intialData, searchName } = useContext(DataContext);

  const displayCards = intialData?.map((ele) => {
    return (
      <div className="fl w-100 w-50-ns pa2">
        <div className="pv4">
          <article className="br2 ba dark-gray b--black-10 mv4 w-100 mw5 center">
            <div className="pa2 ph3-ns pb3-ns">
              <div className="dt w-100 mt1">
                <div className="dtc">
                  <h1 className="f5 f4-ns mv0">{ele.name}</h1>
                </div>
                <div className="dtc tr">
                  <img
                    width="39"
                    src={
                      ele.card_type === "burner"
                        ? "https://i.ibb.co/DG4GMJ1/tinder.png"
                        : "https://i.ibb.co/Q97Ckd4/loop.png"
                    }
                  />
                  <br />
                  <span className="mt2 silver f6"> Expires: {ele.expiry}</span>
                  <br />
                </div>
              </div>
              <div className="mt3 silver">
                <b>• </b>
                {ele.budget_name}
              </div>
              <div className="mt3">
                <span className="ba b--light-silver pa2 pl2 pt1 pb1 silver">
                  {ele.card_type}{" "}
                </span>
              </div>
              <div className="seperator mt3 w-100 outline br-pill">
                <div className="inner-padding"></div>
              </div>
              <div className="flex justify-between mt3">
                <div className="flex wrap">
                  <div className="inner-pointer"></div>
                  <div>Spent</div>
                </div>
                <div className="f7 mt1">
                  {ele.spent.value} {ele.spent.currency}
                </div>
              </div>
              <div className="flex justify-between mt3">
                <div className="flex wrap second-pointer-wrapper">
                  <div className="inner-pointer"></div>
                  <div>Available to spend</div>
                </div>
                <div className="f7 mt1">
                  {ele.available_to_spend.value}{" "}
                  {ele.available_to_spend.currency}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  });
  return (
    <>
      <Search searchName={searchName} />
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="mw9 center ph3-ns">
            <div className="cf ph2-ns">{displayCards}</div>
          </div>
        </div>
      </div>
    </>
  );
}
