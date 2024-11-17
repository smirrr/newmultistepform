"use client"
import { useRouter } from 'next/navigation';
import MultiStepForm from '../form';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";


const PersonaldetailsPage = () => {
    const router = useRouter();
    const user = useSelector((state) => state.user); // Access Redux state
    console.log('here',user)
    const [errors, setErrors] = useState({}); // Store errors locally

    const validateForm = (user) => {
        let errors = {};
        
        // Validate first name
        if (!user.firstName.trim()) {
          errors.firstName = 'First name is required';
        }
      
        // Validate last name
        if (!user.lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
      
        // Validate email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!user.email || !emailPattern.test(user.email)) {
          errors.email = 'Please enter a valid email address';
        }
      
        // Validate zipcode
        if (!user.zipcode || isNaN(user.zipcode)) {
          errors.zipcode = 'ZIP / Postal code should be numeric';
        }
      
        return errors;
      };
      
      const handleClick = () => {
        const validationErrors = validateForm(user);
    
        // Set errors if validation fails
        setErrors(validationErrors);
    
        // If there are no validation errors, move to next page
        if (Object.keys(validationErrors).length === 0) {
          router.push('/accountDetails');  // Navigate to the next page
        }
      };

  return (
    <div>
      <MultiStepForm currentStep={1} errors={errors}/>

      <button onClick={handleClick} className='mr-20'>Next</button>
    </div>
  );
};

export default PersonaldetailsPage;
