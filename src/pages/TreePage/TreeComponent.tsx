import { findPage } from "@/api/TreeApis";
import { Tree } from "@/model/Tree";
import { useEffect, useState } from "react";
import { DataTable } from "../../components/shared/data-table";
import { columns } from "./columns";

const TreeComponent: React.FC = () => {
  const [trees, setTrees] = useState<Tree[]>([]);
  useEffect(() => {
    findPage(0, 15).then((res) => {
      setTrees(res);
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={trees} />
    </div>
  );
};
export default TreeComponent;
