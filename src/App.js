import { Route, Routes } from 'react-router-dom';
import './css/Main.css'
// import './css/Laptop.css'
// import './css/Tablet.css'
// import './css/Phone.css'
import { Home } from './Home';
import { Bags } from './pages/Bags';
import { Basket } from './pages/Basket';
import { Belt } from './pages/Belt';
import { Contact } from './pages/Contact';
import { Favorite } from './pages/Favorite';
import { HotDeal } from './pages/HotDeal';
import { HotDealInner } from './pages/HotDealInner';
import { Profile } from './myProfile/Profile';
import { Sneakers } from './pages/Sneakers';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/belt" element={<Belt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/hotdeal" element={<HotDeal />} />
        <Route path="/product" element={<HotDealInner />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
};

export default App;
