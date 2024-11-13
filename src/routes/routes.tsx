import SummaryComponent from "@/pages/Summary/SummaryComponent";
import TreeComponent from "@/pages/TreePage/TreeComponent";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SummaryComponent />} />
      <Route path="/tree" element={<TreeComponent />} />
      {/** Add more routes here as needed */}
    </Routes>
  );
};
export default Router;
