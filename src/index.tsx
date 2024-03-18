import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { colorsTheme } from '@common/styles/theme/Colors';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <RecoilRoot>
      <ThemeProvider theme={colorsTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </BrowserRouter>
);
