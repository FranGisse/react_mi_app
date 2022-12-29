import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../component/Home/Home';
import Characters from '../component/Characters/Characters';
import Contact from '../component/Contact/Contact';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}