import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ListBook from './components/pages/ListBook';
import ListCategories from './components/pages/ListCategories';


const router = createBrowserRouter (createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<ListBook />} />
    <Route path="/categories" element={<ListCategories />} />
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
