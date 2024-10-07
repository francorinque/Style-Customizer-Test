import React, { createContext, useEffect, useState } from 'react';

type ContextProps = {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    paragraphColor: string;
    sectionColor: string;
  };
  handleColorChange: (
    property: string
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  button: {
    btnTextColor: string;
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
    radius: string;
  };

  mainTitle: {
    fontSize: string;
    fontWeight: string;
  };
  handleMainTitleChange: (
    property: string
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  title: {
    fontSize: string;
    fontWeight: string;
  };
  handleTitleChange: (
    property: string
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
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

  // states
  const [colors, setColors] = useState({
    primaryColor: getInitialState('primaryColor', '#2563eb'),
    secondaryColor: getInitialState('secondaryColor', '#10b981'),
    paragraphColor: getInitialState('paragraphColor', '#374151'),
    sectionColor: getInitialState('sectionColor', '#f3f4f6'),
  });

  // texts
  const [mainTitle, setMainTitle] = useState({
    fontSize: getInitialState('mainTitleFontSize', 'text-6xl'),
    fontWeight: getInitialState('mainTitleFontWeight', 'font-bold'),
  });
  const [title, setTitle] = useState({
    fontSize: getInitialState('titleFontSize', 'text-3xl'),
    fontWeight: getInitialState('titleFontWeight', 'font-bold'),
  });

  const [button, setButton] = useState({
    btnTextColor: getInitialState('btnTextColor', '#2039'),
    radius: getInitialState('btnRadius', 'rounded-md'),
    paddingX: getInitialState('btnPaddingX', 'px-1'),
    paddingY: getInitialState('btnPaddingY', 'py-1'),
  });

  const [card, setCard] = useState({
    radius: getInitialState('cardRadius', 'rounded-md'),
  });

  // functions
  const handleColorChange =
    (property: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setColors({ ...colors, [property]: event.target.value });
    };

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

  const handleMainTitleChange =
    (property: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setMainTitle({ ...title, [property]: event.target.value });
    };
  const handleTitleChange =
    (property: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setTitle({ ...title, [property]: event.target.value });
    };

  useEffect(() => {
    // buttons
    localStorage.setItem('btnPaddingX', button.paddingX);
    localStorage.setItem('btnPaddingY', button.paddingY);
    localStorage.setItem('btnRadius', button.radius);
    localStorage.setItem('btnTextColor', button.btnTextColor);
    // cards
    localStorage.setItem('cardRadius', card.radius);
    // texts
    localStorage.setItem('mainTitleFontSize', mainTitle.fontSize);
    localStorage.setItem('mainTitleFontWeight', mainTitle.fontWeight);
    localStorage.setItem('titleFontSize', title.fontSize);
    localStorage.setItem('titleFontWeight', title.fontWeight);
    // colors
    localStorage.setItem('primaryColor', colors.primaryColor);
    localStorage.setItem('secondaryColor', colors.secondaryColor);
    localStorage.setItem('paragraphColor', colors.paragraphColor);
    localStorage.setItem('sectionColor', colors.sectionColor);
  }, [card, button, colors, mainTitle, title]);

  const contextValue: ContextProps = {
    colors,
    handleColorChange,
    button,
    handleButtonChange,
    card,
    handleCardChange,
    mainTitle,
    handleMainTitleChange,
    title,
    handleTitleChange,
  };

  return (
    <StyleCustomizerContext.Provider value={contextValue}>
      {children}
    </StyleCustomizerContext.Provider>
  );
};

export default StyleCustomizerProvider;
