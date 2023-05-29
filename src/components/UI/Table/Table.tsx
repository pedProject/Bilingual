import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button
} from "@mui/material";

import type { TableProps as Props } from "@mui/material";

interface TableColumn {
  id: string;
  label: string;
  align?: any;
}

interface TableProps extends Props {
  columns: TableColumn[];
  data: any[];
}

const Table = ({ columns, data }: TableProps) => {
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
                {column.id === "icon" ? <Button>{row.icon}</Button> : row[column.id]}
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
  && {
    border-collapse: separate;
    border-spacing: 0 16px;
    width: 70%;
    margin: 0 auto;
    border: none;
  }
`;

const StyledTableBodyRow = styled(TableRow)`
  && {
    border-radius: 10px;
    height: 66px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06);
    & > td:first-child,
    & > td:last-child {
      border-bottom: none;
    }
  }
`;

const StyledTableCell = styled(TableCell)``;

const StyledTableHead = styled(TableHead)`
  && {
    && {
      tr,
      .MuiTableCell-root {
        background-color: none;
        box-shadow: none;
        border-bottom: none;
      }
    }
  }
`;
