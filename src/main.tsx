import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import StyleCustomizerProvider from './context/StyleCustomizer.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleCustomizerProvider>
      <App />
    </StyleCustomizerProvider>
  </StrictMode>
);
