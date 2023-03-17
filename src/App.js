import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data  from "./data";


function App() {
    console.log(data);
    const cards=data.map((item)=>{
      return (
                //  instead of passing each and every property in object ,,we can simply pass object as prop
               //     <Card 
              //     key={item.id}
             //      item={item}
              
          // />
             // we can also use spread operator to pass the object as props
             //{...item}//this stats as similar to passing individual props of an object
        <Card 
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
          
      />
      )
    })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">
          
          {cards}
        
      </section>
        
    </div>
  );
}

export default App;
