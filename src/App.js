import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='mx-3 lg:px-20 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
