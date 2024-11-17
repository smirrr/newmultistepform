"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProgressSteps from "../components/progressSteps";

const PreferencesPage = () => {
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const validateForm = (user) => {
    let errors = {};

    if (!user.agreeToTerms) {
      errors.agreeToTerms = "Please agree to Terms and Conditions";
    }

    return errors;
  };
  const handleClick = () => {
    router.push("/accountDetails");
  };

  const submit = () => {
    const validationErrors = validateForm(user);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      router.push("/review");
    }
  };
  const steps = [
    { id: 1, name: "Step 1", description: "Personal Details" },
    { id: 2, name: "Step 2", description: "Account Details" },
    { id: 3, name: "Step 3", description: "Preferences" },
    { id: 4, name: "Step 4", description: "Finish" },
  ];
  return (
    <div className="flex fex-row gap-10">
      <div className="w-[25%]">
        <ProgressSteps steps={steps} currentStep={3} />
      </div>
      <div className="w-[75%]">
        <MultiStepForm currentStep={3} errors={errors} />
        <div className="fixed bottom-0 left-0 w-full h-28 flex flex-row justify-center items-center gap-5">
          <button
            className="bg-[#90ee90] text-white font-medium font-sans px-4 py-2 rounded-[5cm] hover:bg-white border border-transparent hover:border-[#90ee90] hover:text-[#90ee90]  h-12 w-40 flex justify-center items-center"
            onClick={handleClick}
          >
            Previous
          </button>
          <button
            className="bg-[#90ee90] text-white font-medium font-sans px-4 py-2 rounded-[5cm] hover:bg-white border border-transparent hover:border-[#90ee90] hover:text-[#90ee90]  h-12 w-40 flex justify-center items-center"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
