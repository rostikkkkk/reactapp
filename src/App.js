import Header from './Header/Header.js';
import Place from './Place/Place.js';

import './App.css';
import data from './data.js'


function App() {
    const places = data.map(place => <Place key={place.id} {...place}/> )
      return(
           <>
              <Header />
               <section id='section'>{places}</section>
           </>
  );
}

export default App;
