import React, { createContext, useState, useContext } from 'react';

const VerificationContext = createContext();

export function VerificationProvider({ children }) {
  const [isVerified, setIsVerified] = useState(false);
  const [userCredential, setUserCredential] = useState(null);

  const verify = () => {
    setIsVerified(true);
    setUserCredential({
      verifiedAt: new Date().toISOString(),
      method: 'ZKPassport',
      hash: '0x7f9a...c3d2',
      event: 'DevConnect Argentina 2025'
    });
  };

  return (
    <VerificationContext.Provider value={{ isVerified, userCredential, verify }}>
      {children}
    </VerificationContext.Provider>
  );
}

export function useVerification() {
  const context = useContext(VerificationContext);
  if (!context) {
    throw new Error('useVerification must be used within VerificationProvider');
  }
  return context;
}
