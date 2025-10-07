import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import type { AppRows } from "../types/appTypes";

export interface AppsListProps {
  appRows?: AppRows;
  total?: number;
}

const AppsList: React.FC<AppsListProps> = ({ appRows }) => {
  return (
    <TableContainer component="div">
      <Table>
        <TableHead></TableHead>
        <TableBody>
          {appRows?.appRows.map((app) => (
            <TableRow key={app.appId}>
              <TableCell>{app.appName}</TableCell>
              <TableCell>{app.category}</TableCell>
              <TableCell>{app.appSources.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppsList;
