import React from "react";
import "../src/Globle-Style.scss";
import getfilteredData from "./service/filterData";
import useFetchAsync_Then from "./service/fetchData";
import Header from "./components/Header.component";
import Main from "./components/main/Main.components";
import API_URL from"../src/service/api";

const App = () => {
  const { data, isLoading, isError } = useFetchAsync_Then(API_URL);
  const [sortInputs, setSortInputs] = React.useState({
    searchInput: "",
    sortByMktCap: false,
    sortByPercentage: false,
  });
  const filteredData = getfilteredData(data, sortInputs);

  return (
    <>
      <Header {...{ sortInputs, setSortInputs }} />
      <Main {...{ filteredData, isLoading, isError }} />
    </>
  );
};

export default App;