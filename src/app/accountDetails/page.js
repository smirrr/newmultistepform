"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
    <div>
      <MultiStepForm currentStep={2} errors={errors} />
      <button onClick={handleClick}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default AccountdetailsPage;
