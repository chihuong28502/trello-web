import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
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
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
