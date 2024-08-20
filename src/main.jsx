import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'; // Import Layout component
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'; // Import About component
import PoojaTimings from './components/PoojaTimings/PoojaTimings.jsx'; // Import PoojaTimings component
import Events from './components/Events/Events.jsx'; // Import Events component
import Contact from './components/Contact/Contact.jsx'; // Import Contact component
import Donation from './components/Donation/Donation.jsx'; // Import Donation component
import Volunteer from './components/Volunteer/Volunteer.jsx'; // Import Volunteer component
import Tenders from './components/Tenders/Tenders.jsx'; // Import Tenders component
import Gallery from './components/Gallery/Gallery.jsx'; // Import Gallery component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='pooja-timings' element={<PoojaTimings />} />
      <Route path='events' element={<Events />} />
      <Route path='contact' element={<Contact />} />
      <Route path='donation' element={<Donation />} />
      <Route path='volunteer' element={<Volunteer />} />
      <Route path='tenders' element={<Tenders />} />
      <Route path='gallery' element={<Gallery />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
