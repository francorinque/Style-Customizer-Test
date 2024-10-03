import { useContext } from 'react';
import { StyleCustomizerContext } from '../context/StyleCustomizer.context';

// Crea un hook para acceder al contexto
export const useStyleCustomizerContext = () => {
  const context = useContext(StyleCustomizerContext);
  if (context === null) {
    throw new Error(
      'useStyleCustomizerContext must be used within a StyleCustomizerProvider'
    );
  }
  return context;
};
