import { Tree } from "@/model/Tree";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Tree>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "locationType",
    header: "type d'emplacement",
  },
  {
    accessorKey: "district",
    header: "Arrondissement",
  },
  {
    accessorKey: "address",
    header: "Adresse",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "labelFr",
    header: "Label",
  },
  {
    accessorKey: "geoPoint",
    header: "Corrdinates",
    cell: ({ row }) => {
      const point = row.original.geoPoint;
      console.log(point);

      return (
        <>
          ({point.lat},{point.lon})
        </>
      );
    },
  },
];
