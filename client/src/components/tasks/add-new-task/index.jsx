import CommonDialog from "@/components/common-dialog";
import { addNewTaskFormControls } from "@/config";

function AddNewTask({
  showDialog,
  setShowDialog,
  handleSubmit,
  taskFormData,
  currentEditedId,
  setCurrentEditedId
}) {
  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      onOpenChange={() => {
        setShowDialog(false);
        currentEditedId ? taskFormData.reset() : null;
        setCurrentEditedId(null);
      }}

      title={currentEditedId ? "Edit Task" : " Post New Task "}
      btnText={"Add"}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
}

export default AddNewTask;
