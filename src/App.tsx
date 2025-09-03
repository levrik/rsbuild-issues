import { lazy } from 'react';

// import Page from './Page';
const Page = lazy(() => import('./Page'));

const App = () => {
  return (
    <div>
      <Page />
    </div>
  );
};

export default App;
