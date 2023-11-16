import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

function BoardContent({ board }) {
  //
  // const poiterSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });
  //di chuyên 10px chuột thì mới chạy event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  const touchSensor = useSensor(TouchSensor, {
    // dữ 250s hoặc dung sai cảm ứng 500px  trên ứng dụng chạm vuốt
    activationConstraint: { delay: 150, tolerance: 500 },
  });
  // ưu tiên dùng mouuse và touch để có tair nghiệm trên mobile tốt nhất
  const sensors = useSensors(mouseSensor, touchSensor);
  //
  const [oderedColumns, setOderedColumns] = useState([]);
  useEffect(() => {
    setOderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // nếu ko tồn tại over (kéo linh tinh ko đặt)=> return tránh lỗi
    if (!over) return;
    //nếu vị trí kéo thả khác ban đầu thì :
    if (active.id != over.id) {
      // lấy vị trí cũ từ thàng active từ trường _id của obj
      const oldIndex = oderedColumns.findIndex((c) => c._id === active.id);
      // lấy vị trí mới từ thàng over từ trường _id của obj
      const newIndex = oderedColumns.findIndex((c) => c._id === over.id);

      // dùng arrMove của dndKit để sort lại arr mảng colums ban đầu
      //code ở mục sortable trong documents đường đãn github dnd-kit/packages/sortable/src/utilities/arrayMove.ts

      const dndOderedColumns = arrayMove(oderedColumns, oldIndex, newIndex);
      // xử lí gọi API
      // const dndOderedColumnsIds = dndOderedColumns.map((c) => c._id);

      //caajp nhật state column sau khi kéo thả
      setOderedColumns(dndOderedColumns);
    }
  };
  return (
    //fix click gọi event
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
    </DndContext>
  );
}

export default BoardContent;
