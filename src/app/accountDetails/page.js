"use client"
import { useRouter } from 'next/navigation';
import MultiStepForm from '../form';
const AccountdetailsPage = () => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/personalDetails');  // This will navigate to /about/page.tsx
    };
    const goToNextPage = () => {
        router.push('/preferences');  // This will navigate to /about/page.tsx
      };
  return (
    <div>
      <MultiStepForm currentStep={2}/>
      <button onClick={handleClick}>Previous</button>
      <button onClick={goToNextPage}>Next</button>      

    </div>
  );
};

export default AccountdetailsPage;
