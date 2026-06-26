type AreaColumn = {
  header: string;
  areas: readonly { name: string; primary: boolean }[];
};

const headerCellStyles = [
  "font-primary px-4 py-3 text-left font-bold text-navy",
  "font-primary bg-teal-tint/50 px-4 py-3 text-left font-bold text-teal",
  "font-primary px-4 py-3 text-left font-bold text-slate",
] as const;

export function FaqAreasGrid({ areas }: { areas: readonly AreaColumn[] }) {
  const maxRows = Math.max(...areas.map((column) => column.areas.length));

  return (
    <div className="mb-6 overflow-x-auto rounded-xl border border-mist">
      <table className="w-full min-w-[640px] border-collapse text-[0.84rem] sm:text-[0.88rem]">
        <thead>
          <tr className="border-b border-mist bg-ice">
            {areas.map((column, columnIndex) => (
              <th
                key={column.header}
                scope="col"
                className={headerCellStyles[columnIndex] ?? headerCellStyles[2]}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }, (_, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-mist last:border-b-0"
            >
              {areas.map((column, columnIndex) => {
                const area = column.areas[rowIndex];

                return (
                  <td
                    key={`${column.header}-${rowIndex}`}
                    className={`font-secondary px-4 py-3 ${
                      columnIndex === 1
                        ? "bg-teal-tint/30 text-charcoal"
                        : "text-slate"
                    }`}
                  >
                    {area ? (
                      <span
                        className={
                          area.primary ? "font-semibold text-navy" : undefined
                        }
                      >
                        {area.name}
                      </span>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
