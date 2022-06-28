import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';


function App() {

  const [categories] = useState([
    { name: "ABOUT",
      description: "About Me"
    },
    { name: "PORTFOLIO", 
      description: "Portfolio & Technologies" 
    },
    { name: "Resume", 
      description: "Resume" 
    },
    { name: "Contact",
      description: "Contact",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div class="flex flex-col h-screen justify-between">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;