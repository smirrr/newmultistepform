"use client";
import { useRouter } from "next/navigation";
import MultiStepForm from "../form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearUser } from "../store/userSlice"; // import clearUser action

const ProgressSteps = () => {


  return (
    <div className="mt-10 mx-10 p-10 border border-solid border-[#90EE90] rounded-lg">
    Steps here
    </div>
  );
};

export default ProgressSteps;
