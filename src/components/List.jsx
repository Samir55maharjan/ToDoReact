import { ArrowRightAltOutlined, DeleteOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

const TodoList = ({ id, taskName, hours, onDelete, onTransfer }) => {

  const handleDelete =()=> {
    alert("delete alled");
    onDelete(taskName);
  }
  const handleTransfer =()=> {
    onTransfer(taskName);
  }

  return (
    <Stack direction={"row"} spacing={3} sx={{ backgroundColor: '#f1eaf2' }} padding={2}>
      <span>{id}</span>
      <span>{taskName}</span>
      <span>{hours}</span>
      <div>
        <IconButton color="error" onClick={handleDelete}>
          <DeleteOutlined /> 
        </IconButton>
        <IconButton color="success" onClick={handleTransfer}>
          <ArrowRightAltOutlined />
        </IconButton>
      </div>
    </Stack>
  )
}

export default TodoList;
