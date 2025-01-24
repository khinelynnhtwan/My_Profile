
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routers';

const root = document.querySelector("#root");


createRoot(root).render(<RouterProvider router={router}/>);