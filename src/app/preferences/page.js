"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearUser } from "../store/userSlice"; // import clearUser action

const PreferencesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user); // Access Redux state
  console.log("here", user);
  const [errors, setErrors] = useState({}); // Store errors locally
  const validateForm = (user) => {
    let errors = {};

    if (!user.agreeToTerms) {
      errors.agreeToTerms = "Please agree to Terms and Conditions";
    }

    return errors;
  };
  const handleClick = () => {
    router.push("/accountDetails"); // This will navigate to /about/page.tsx
  };

  const submit = () => {
    const validationErrors = validateForm(user);

    // Set errors if validation fails
    setErrors(validationErrors);

    // If there are no validation errors, move to next page
    if (Object.keys(validationErrors).length === 0) {
      dispatch(clearUser());

      router.push("/");
    } // This will navigate to /about/page.tsx
  };

  return (
    <div>
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
  );
};

export default PreferencesPage;
