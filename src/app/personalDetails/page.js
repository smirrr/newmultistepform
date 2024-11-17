"use client"
import { useRouter } from 'next/navigation';
import MultiStepForm from '../form';

const PersonaldetailsPage = () => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/accountDetails');  // This will navigate to /about/page.tsx
    };
    const goToNextPage = () => {
        router.push('/preferences');  // This will navigate to /about/page.tsx
      };
  return (
    <div>
      <MultiStepForm currentStep={1}/>

      <button onClick={handleClick} className='mr-20'>Next</button>
    </div>
  );
};

export default PersonaldetailsPage;
