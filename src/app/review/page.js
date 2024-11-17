"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProgressSteps from "../components/progressSteps";
import { clearUser } from "../store/userSlice"; // import clearUser action

const ReviewPage = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user); // Access Redux state
  console.log("here", user);
  const dispatch = useDispatch();

  const handleClick = () => {
    // Set errors if validation fails

    // If there are no validation errors, move to next page
    router.push("/"); // Navigate to the next page
    dispatch(clearUser());

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
        <ProgressSteps steps={steps} currentStep={4} />{" "}
      </div>
      <div className="w-[75%]">
        <div className="border border-solid border-[#90EE90] mt-10 mr-10 p-10  rounded-lg w-[90%] h-[35rem]">
          <p className="font-sans text-[#00008B] font-bold text-lg mt-10 mb-10">
            Your details have been Saved !{" "}
          </p>
          <div className="block text-sm/6  font-sans text-[#00008B] flex flex-col gap-2">
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Address: {user.address}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>ZipCode: {user.zipcode}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-28 flex flex-row justify-center items-center gap-5">
          <button
            className="bg-[#90ee90] text-white font-medium font-sans px-4 py-2 rounded-[5cm] hover:bg-white border border-transparent hover:border-[#90ee90] hover:text-[#90ee90]  h-12 w-40 flex justify-center items-center"
            onClick={handleClick}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
