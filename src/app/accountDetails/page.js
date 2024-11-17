"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProgressSteps from "../components/progressSteps";

const AccountdetailsPage = () => {
  const user = useSelector((state) => state.user); // Access Redux state
  console.log("here", user);
  const [errors, setErrors] = useState({}); // Store errors locally
  const router = useRouter();
  const validateForm = (user) => {
    let errors = {};

    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else if (!/[a-zA-Z]/.test(user.password) || !/\d/.test(user.password)) {
      errors.password = "Password must contain both letters and numbers";
    }

    // Validate confirm password
    if (!user.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (user.confirmPassword !== user.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };
  const steps = [
    { id: 1, name: "Step 1", description: "You can hover on the dot." },
    { id: 2, name: "Step 2", description: "In progress step." },
    { id: 3, name: "Step 3", description: "Step is completed." },
    { id: 4, name: "Step 4", description: "Final step." },
  ];
  const handleClick = () => {
    router.push("/personalDetails"); // This will navigate to /about/page.tsx
  };
  const goToNextPage = () => {
    const validationErrors = validateForm(user);

    // Set errors if validation fails
    setErrors(validationErrors);

    // If there are no validation errors, move to next page
    if (Object.keys(validationErrors).length === 0) {
      router.push("/preferences"); // This will navigate to /about/page.tsx
    }
  };
  return (
    <div className="flex fex-row gap-10">
      <div className="w-[25%]">
        <ProgressSteps steps={steps} currentStep={2} />
      </div>
      <div className="w-[75%]">
        <MultiStepForm currentStep={2} errors={errors} />
        <div className="fixed bottom-0 left-0 w-full h-28 flex flex-row justify-center items-center gap-5">
          <button
            className="bg-[#90ee90] text-white font-medium font-sans px-4 py-2 rounded-[5cm] hover:bg-white border border-transparent hover:border-[#90ee90] hover:text-[#90ee90]  h-12 w-40 flex justify-center items-center"
            onClick={handleClick}
          >
            Previous
          </button>
          <button
            className="bg-[#90ee90] text-white font-medium font-sans px-4 py-2 rounded-[5cm] hover:bg-white border border-transparent hover:border-[#90ee90] hover:text-[#90ee90]  h-12 w-40 flex justify-center items-center"
            onClick={goToNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountdetailsPage;
