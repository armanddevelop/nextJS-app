import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f9fafb",
    color: theme.palette.common.black,
    borderLeft: "1px solid  rgba(34,36,38,.1)",
    borderTop: "1px solid  rgba(34,36,38,.1)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    borderLeft: "1px solid  rgba(34,36,38,.1)",
  },
}));
