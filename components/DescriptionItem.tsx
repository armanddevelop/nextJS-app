import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./stylesTable/stylesTable";

type DescriptionItemProps = {
  item: TProduct;
};

const buildHeaders = (attr: TProductAttributes) => {
  const headers = Object.keys(attr).filter((key) => key !== "description");
  return headers;
};

const DescriptionItem = ({ item }: DescriptionItemProps) => {
  const { attributes } = item;
  const rows = [attributes];
  const headers = buildHeaders(attributes);
  return (
    <>
      <h3>About this Avocado</h3>
      <p>{attributes.description}</p>
      <Divider sx={{ margin: "25px" }} />
      <Paper elevation={3}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: 0 }}>Attributes</TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                {headers.map((head, idx) => (
                  <StyledTableCell key={idx}>
                    {head.toUpperCase()}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(({ shape, hardiness, taste }, idx) => (
                <StyledTableRow key={idx}>
                  <TableCell align="left">{shape}</TableCell>
                  <TableCell align="left">{hardiness}</TableCell>
                  <TableCell align="left">{taste}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default DescriptionItem;
