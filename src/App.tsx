import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Products from "./pages/Products";
import Logo from './images/Icons/yoocard (2).png'
import Item from "./pages/Item";
import AddForm from "./pages/AddForm";
import Order from "./pages/Order";
import ScrollToTop from "./components/HelpComponent/ScrollToTop";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Root shopLogo={Logo}/>}>
                    <Route index element={<Products/>}/>
                    <Route path="new-item" element={<AddForm/>}/>
                    <Route path="cart" element={<Order/>}/>
                </Route>
                <Route path={'/el'} element={<Root shopLogo={'hidden'}/>}>
                    <Route path={':itemId'} element={<Item/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;