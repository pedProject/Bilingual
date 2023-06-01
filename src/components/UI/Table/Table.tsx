import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled
} from "@mui/material";

// import { IconButton } from "../Button/IconButton";

import type { TableProps } from "@mui/material";

interface TableColumn {
  id: string;
  label: string;
  align: "center" | "left" | "right" | "inherit" | ("justify" & any);
}

type Props = {
  columns: TableColumn[];
  data: any[];
  onHandleGetItems: (id: string) => void;
};

const Table = ({ columns, data }: TableProps & Props) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableBodyRow>
          {columns.map((column) => (
            <StyledTableCell key={column.id} align={column.align}>
              {column.label}
            </StyledTableCell>
          ))}
        </StyledTableBodyRow>
      </StyledTableHead>
      <TableBody>
        {data.map((row, index) => (
          <StyledTableBodyRow key={index}>
            {columns.map((column) => (
              <StyledTableCell key={column.id} align={column.align}>
                {column.id === "icon" ? (
                  <div>{row.icon}</div>
                ) : (
                  // <IconButton onClick={() => onHandleGetItems(column.id)} Icon={row.icon} />
                  row[column.id]
                )}
              </StyledTableCell>
            ))}
          </StyledTableBodyRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled(MuiTable)`
  border-collapse: separate;
  border-spacing: 0 16px;
  width: 70%;
  margin: 0 auto;
`;

const StyledTableBodyRow = styled(TableRow)`
  border-radius: 10px;
  height: 66px;
  border-bottom-color: red !important;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06);
  & > td {
    border-bottom: none;
  }
`;

const StyledTableCell = styled(TableCell)``;

const StyledTableHead = styled(TableHead)`
  tr,
  .MuiTableCell-root {
    background-color: none;
    box-shadow: none;
    border-bottom: none;
  }
`;
