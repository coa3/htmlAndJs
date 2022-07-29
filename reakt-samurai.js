import React from 'react'; // import React from 'react'; с сентября 2020 года достаточно указать его только в index.js так как вышел 
                            //React 17 и можно использовать JSX без импорта React в другие фаилы.
import './App.css';
// export default App; так надо давать разрешение на экспорт, default- одной функции

const App = () => {
    return (
          <div>
     <Headr/>
     < Technologies/>
      </div>
    );
  }
  
  const Technologies = () =>{
  return (
  <div>
       <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
       </ul>
      </div>
    );
  }
  const Headr = () => {
    return (
      <div>
        <a href='#s'>Home</a>
        <a href='#s'>Naws</a>
        <a href='#s'>Messages</a>
  
  
      </div>
    )
  }
  
  export default App;
  