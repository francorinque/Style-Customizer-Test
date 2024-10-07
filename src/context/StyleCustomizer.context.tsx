import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
} from 'react';
import usePersistedState from '../hooks/usePersistedState';

type ContextProps = {
  colors: ColorsState;
  button: ButtonState;
  card: CardState;
  mainTitle: TitleState;
  title: TitleState;
  handleColorChange: (
    property: keyof ColorsState
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleButtonChange: (
    property: keyof ButtonState
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleCardChange: (
    property: keyof CardState
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleMainTitleChange: (
    property: keyof TitleState
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleTitleChange: (
    property: keyof TitleState
  ) => (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

const initialColorsState = {
  primaryColor: '#2563eb',
  secondaryColor: '#10b981',
  paragraphColor: '#374151',
  sectionColor: '#f3f4f6',
};

const initialButtonState = {
  btnTextColor: '#2039',
  radius: 'rounded-md',
  paddingX: 'px-2',
  paddingY: 'py-2',
};

const initialCardState = {
  radius: 'rounded-md',
};

const initialTitleState = {
  fontSize: 'text-6xl',
  fontWeight: 'font-bold',
};

type ColorsState = typeof initialColorsState;
type ButtonState = typeof initialButtonState;
type CardState = typeof initialCardState;
type TitleState = typeof initialTitleState;
type State = Record<string, string>;

export const StyleCustomizerContext = createContext<ContextProps | null>(null);

const StyleCustomizerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colors, setColors] = usePersistedState<ColorsState>(
    'colors',
    initialColorsState
  );
  const [button, setButton] = usePersistedState<ButtonState>(
    'button',
    initialButtonState
  );
  const [card, setCard] = usePersistedState<CardState>(
    'card',
    initialCardState
  );
  const [mainTitle, setMainTitle] = usePersistedState<TitleState>(
    'mainTitle',
    initialTitleState
  );
  const [title, setTitle] = usePersistedState('title', initialTitleState);

  const handleChange =
    <T extends State>(setState: Dispatch<SetStateAction<T>>) =>
    (property: keyof T) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setState((prevState) => ({
        ...prevState,
        [property]: event.target.value,
      }));
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

  const contextValue = useMemo(
    () => ({
      colors,
      button,
      card,
      mainTitle,
      title,
      handleColorChange: handleChange(setColors),
      handleButtonChange: handleChange(setButton),
      handleCardChange: handleChange(setCard),
      handleMainTitleChange: handleChange(setMainTitle),
      handleTitleChange: handleChange(setTitle),
    }),
    [
      colors,
      button,
      card,
      mainTitle,
      title,
      setColors,
      setButton,
      setCard,
      setMainTitle,
      setTitle,
    ]
  );

  return (
    <StyleCustomizerContext.Provider value={contextValue}>
      {children}
    </StyleCustomizerContext.Provider>
  );
};

export default StyleCustomizerProvider;
