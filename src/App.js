import Header from './component/Header/Header';
import Headline from './component/Headline/Headline';
import './App.scss'; 

function App() {


  const tempArr = [{
    fName: 'Raiyan',
    lName: 'Razi',
    email: 'raiyanrazi3357@gmail.com',
    age: 22,
    onlineStatus: true
  }]

  return (
    <div >
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
