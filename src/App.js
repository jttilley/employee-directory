import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import DataBody from "./components/DataBody";
import DataArea from "./components/DataArea";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Nav />
        {/* <SearchBox /> */}
      {/* <Main /> */}
      <Wrapper />
        {/* <DataArea />
          <DataTable />
            <DataBody /> */}
            
    </div>
  );
}

export default App;