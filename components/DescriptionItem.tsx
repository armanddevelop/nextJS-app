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
    <section>
      <h3>About this Avocado</h3>
      <p>{attributes.description}</p>
      <Divider sx={{ margin: "25px" }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Attributes</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              {headers.map((head, idx) => (
                <TableCell key={idx}>{head.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ shape, hardiness, taste }, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{shape}</TableCell>
                <TableCell align="left">{hardiness}</TableCell>
                <TableCell align="left">{taste}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default DescriptionItem;
