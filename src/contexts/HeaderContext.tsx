import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HeaderContextType {
  isHeaderVisible: boolean;
  setHeaderVisible: (visible: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const setHeaderVisible = (visible: boolean) => {
    setIsHeaderVisible(visible);
  };

  return (
    <HeaderContext.Provider value={{ isHeaderVisible, setHeaderVisible }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader deve ser usado dentro de um HeaderProvider');
  }
  return context;
};
