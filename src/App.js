import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='mx-3 lg:mx-20'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
