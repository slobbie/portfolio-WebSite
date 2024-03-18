import { Route, Routes } from 'react-router-dom';
import CommonLayout from '@common/layout/CommonLayout';
import ContactPage from '@feature/contact/page/ContactPage';
import HomePage from '@src/feature/home/page/HomePage';
import WorkPage from '@feature/work/page/WorkPage';
import routes from '@common/constants/path.constants';
import GlobalStyle from '@common/styles/theme/GlobalStyle';

/** 메인 app */
const App = () => {
  const path = routes.path;
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path={path.home} element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          <Route path={path.work} element={<WorkPage />} />
          <Route path={path.contact} element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
