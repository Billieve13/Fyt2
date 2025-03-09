// ChallengeContext.js
import React, { createContext, useContext, useState } from 'react';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [isChallengeCompleted, setIsChallengeCompleted] = useState(false);

  return (
    <ChallengeContext.Provider value={{ isChallengeCompleted, setIsChallengeCompleted }}>
      {children}
    </ChallengeContext.Provider>
  );
};

// Custom hook for using the context
export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw new Error('useChallenge must be used within a ChallengeProvider');
  }
  return context;
};