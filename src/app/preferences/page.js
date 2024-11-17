"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";

const PreferencesPage = () => {
  const router = useRouter();
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
      router.push("/");
    } // This will navigate to /about/page.tsx
  };

  return (
    <div>
      <MultiStepForm currentStep={3} errors={errors} />
      <button onClick={handleClick}>Previous</button>
      <button onClick={submit}>Submit</button>

    </div>
  );
};

export default PreferencesPage;
