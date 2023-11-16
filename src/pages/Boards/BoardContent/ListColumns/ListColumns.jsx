import { Box, Button } from "@mui/material";
import Column from "./Column/Column";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListColumns({ columns }) {
  return (
    <SortableContext
      items={columns?.map(c => c._id)}
      strategy={horizontalListSortingStrategy}
    >
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
        {columns?.map((column) => {
          return <Column key={column._id} column={column} />;
        })}
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
    </SortableContext>
  );
}

export default ListColumns;
