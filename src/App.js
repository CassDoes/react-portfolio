import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div class="flex flex-col h-screen justify-between">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;