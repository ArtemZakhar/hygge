import { Outlet } from 'react-router-dom';

import GridContainer from './components/common/containers/GridContainer';
import NavBar from './components/common/layout/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="bg-gray-100 min-h-screen py-8">
        <GridContainer>
          <Outlet />
        </GridContainer>
      </main>
    </>
  );
}

export default App;
