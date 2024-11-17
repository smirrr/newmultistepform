"use client";
import React, { useState } from "react";
import { Steps, Popover } from "antd";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Step {index + 1} status: {status}
      </span>
    }
    trigger="hover"
  >
    {dot}
  </Popover>
);

const ProgressSteps = ({ steps, currentStep }) => {
  return (
    <div className="mt-10 mx-10 p-10 border border-solid border-[#90EE90] rounded-lg h-[35rem] flex justify-center items-center">
      <Steps
        direction="vertical"
        current={currentStep - 1}
        progressDot={customDot}
        items={steps.map((step) => ({
          title: step.name,
          description: step.description,
        }))}
      />
    </div>
  );
};

export default ProgressSteps;
