type TableLoadingRowsProps = {
  columns?: number;
  rows?: number;
};

const TableLoadingRows = ({
  columns = 5,
  rows = 5,
}: TableLoadingRowsProps) => {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="border-t border-slate-200">
          {Array.from({ length: columns }).map((__, colIndex) => (
            <td key={colIndex} className="px-4 py-3">
              <div className="h-4 rounded animate-pulse bg-slate-200" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableLoadingRows;