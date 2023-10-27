
import { Route, Routes } from 'react-router-dom';
import Restaurant from './Apirestaurant/Restaurant';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ViewRest from './ViewRest/ViewRest';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
         {/* localhost 3000 */}
        <Route path='/' element={<Restaurant/>}/>
          {/* localhost 3000/view/1 */}
        <Route path='/view/:id' element={<ViewRest/>}/>
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
