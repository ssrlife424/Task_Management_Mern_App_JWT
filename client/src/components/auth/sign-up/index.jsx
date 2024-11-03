import CommonForm from "@/components/common-form";
import { signupFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { callRegisterUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  async function handleSubmit(getData) {
    console.log(getData);

    const data = await callRegisterUserApi(getData);
    console.log(data, "data");

    if (data?.success) {
      toast({
        title: "User register Successful",
        descripttion: "welcome",

      })
      navigate('/tasks/list');
    }else({
      title:'Error',
      description: 'some Error occured',
    })
  }


  return (
    <div>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signupFormControls}
        btnText={"Sign Up"}
      />
    </div>
  );
}

export default SignUp;
