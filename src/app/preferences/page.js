"use client"
import { useRouter } from 'next/navigation';
import MultiStepForm from '../form';
const PreferencesPage = () => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/accountDetails');  // This will navigate to /about/page.tsx
    };
  return (
    <div>
      <MultiStepForm currentStep={3}/>
      <button onClick={handleClick}>Previous</button>
    </div>
  );
};

export default PreferencesPage;
