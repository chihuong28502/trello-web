import { Box, Button } from "@mui/material";
import Column from "./Column/Column";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        overflowX: "auto",
        display: "flex",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": {
          m: 1,
        },
      }}
    >
      {/* COLUMN */}
      <Column />
      <Column />
      <Column />
      <Column />
      {/* add new clolum */}
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          bgcolor: "#ffffff3d",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
        }}
      >
        <Button
          sx={{
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
            pl: 2.5,
            py: 1,
          }}
          startIcon={<NoteAddIcon />}
        >
          Add new Column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
