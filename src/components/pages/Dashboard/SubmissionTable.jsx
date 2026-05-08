import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import dayjs from "dayjs";

const SubmissionTable = ({ data = [], isLoading }) => {
  const [sorting, setSorting] = useState([]);

  // ✅ safe date helper
  const getDate = (row) => row.createdAt || row.created_at;

  // ✅ Columns
  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: ({ row }) => row.original.name || "N/A",
      },
      {
        header: "Phone",
        accessorKey: "phone_number",
        cell: ({ row }) => row.original.phone_number || "N/A",
      },
      {
        header: "Message",
        accessorKey: "message",
        cell: ({ row }) => (
          <div className="max-w-[300px] truncate">
            {row.original.message || "N/A"}
          </div>
        ),
      },
      {
        header: "Date",
        accessorKey: "createdAt",
        cell: ({ row }) => {
          const date = getDate(row.original);
          return date
            ? dayjs(date).format("DD MMM YYYY, hh:mm A")
            : "N/A";
        },
      },
    ],
    []
  );

  // ✅ Table instance
  const table = useReactTable({
    data: data || [],
    columns,
    getRowId: (row) => row._id, // 🔥 VERY IMPORTANT
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  console.log("TABLE ROWS 👉", table.getRowModel().rows);

  // ✅ Loading
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <h2 className="text-lg font-semibold mb-4">
        Recent Submissions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* HEADER */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b text-gray-500">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-2 text-left cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* BODY */}
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-400">
                  No submissions found
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;