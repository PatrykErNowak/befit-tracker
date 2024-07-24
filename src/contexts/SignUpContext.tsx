import { createContext, useContext, useState } from 'react';

type SignUpContextType = {
  step: 0 | 1 | 2;
  goToNextStep: () => void;
};

const SignUpContext = createContext<SignUpContextType | null>(null);

function SignUpProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<0 | 1 | 2>(0);

  function goToNextStep() {
    if (step === 0) setStep(1);
    if (step === 1) setStep(2);
  }

  return <SignUpContext.Provider value={{ step, goToNextStep }}>{children}</SignUpContext.Provider>;
}

function useSignUpSteps() {
  const context = useContext(SignUpContext);
  if (!context) throw new Error('useSignUpSteps muse be used with SignUpProvider');
  return context;
}

export { SignUpProvider, useSignUpSteps };
