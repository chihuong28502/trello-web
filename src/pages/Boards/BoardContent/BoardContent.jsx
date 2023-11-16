import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";

function BoardContent({ board }) {
  const oderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        height: (theme) => theme.trello.boardContentHeight,
        width: "100%",
        p: "3px 0",
      }}
    >
      <ListColumns columns={oderedColumns} />
    </Box>
  );
}

export default BoardContent;
