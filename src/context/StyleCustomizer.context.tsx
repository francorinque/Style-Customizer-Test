import React, { createContext, useEffect, useState } from 'react';

type ContextProps = {
  button: {
    bg: string;
    text: string;
    radius: string;
    paddingX: string;
    paddingY: string;
  };
  handleButtonChange: (
    property: string
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleCardChange: (
    property: string
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  card: {
    bg: string;
    radius: string;
  };
};

export const StyleCustomizerContext = createContext<ContextProps | null>(null);

const StyleCustomizerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const getInitialState = (key: string, defaultValue: string) => {
    const storedValue = localStorage.getItem(key);
    return storedValue || defaultValue;
  };

  const [button, setButton] = useState({
    bg: getInitialState('btnBgColor', '#f97316'),
    text: getInitialState('btnTextColor', 'text-white'),
    radius: getInitialState('btnRadius', 'rounded-md'),
    paddingX: getInitialState('btnPaddingX', 'px-1'),
    paddingY: getInitialState('btnPaddingY', 'py-1'),
  });

  const [card, setCard] = useState({
    bg: getInitialState('cardBgColor', '#f5f5f5'),
    radius: getInitialState('cardRadius', 'rounded-md'),
  });

  const handleButtonChange =
    (property: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setButton({ ...button, [property]: event.target.value });
    };

  const handleCardChange =
    (property: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setCard({ ...card, [property]: event.target.value });
    };

  useEffect(() => {
    // buttons
    localStorage.setItem('btnPaddingX', button.paddingX);
    localStorage.setItem('btnPaddingY', button.paddingY);
    localStorage.setItem('btnRadius', button.radius);
    localStorage.setItem('btnBgColor', button.bg);
    localStorage.setItem('btnTextColor', button.text);
    // cards
    localStorage.setItem('cardBgColor', card.bg);
    localStorage.setItem('cardRadius', card.radius);
  }, [card, button]);

  const contextValue = {
    button,
    handleButtonChange,
    card,
    handleCardChange,
  };

  return (
    <StyleCustomizerContext.Provider value={contextValue}>
      {children}
    </StyleCustomizerContext.Provider>
  );
};

export default StyleCustomizerProvider;
