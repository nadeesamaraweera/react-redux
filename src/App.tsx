import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Dashboard } from './pages/DashBoard';
import { AddCustomer } from './pages/AddCustomer';
import { UpdateCustomer } from './pages/UpdateCustomer';
import { DeleteCustomer } from './pages/DeleteCustomer';
import { RootLayout } from './component/RootLayout';
import { Provider } from 'react-redux';
import store from './store/store';  // Import Redux store

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            children: [
                { path: '', element: <Dashboard /> },
                { path: '/add', element: <AddCustomer /> },
                { path: '/delete', element: <DeleteCustomer /> },
                { path: '/update', element: <UpdateCustomer /> },
            ],
        },
    ]);

    return (
        <Provider store={store}>  {/* Wrap the app in the Provider */}
            <RouterProvider router={routes} />
        </Provider>
    );
}

export default App;