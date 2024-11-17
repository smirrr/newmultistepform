"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProgressSteps from "../components/progressSteps";

const PersonaldetailsPage = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});

  const validateForm = (user) => {
    let errors = {};

    if (!user.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!user.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!user.email || !emailPattern.test(user.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!user.zipcode || isNaN(user.zipcode)) {
      errors.zipcode = "ZIP / Postal code should be numeric";
    }

    return errors;
  };

  const handleClick = () => {
    const validationErrors = validateForm(user);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      router.push("/accountDetails");
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
        <ProgressSteps steps={steps} currentStep={1} />{" "}
      </div>
      <div className="w-[75%]">
        <MultiStepForm currentStep={1} errors={errors} />
        <div className="fixed bottom-0 left-0 w-full h-28 flex flex-row justify-center items-center gap-5">
          <button
            className="bg-[#90ee90] text-white font-medium font-sans px-4 py-2 rounded-[5cm] hover:bg-white border border-transparent hover:border-[#90ee90] hover:text-[#90ee90]  h-12 w-40 flex justify-center items-center"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonaldetailsPage;
