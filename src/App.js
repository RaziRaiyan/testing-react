import Header from './component/Header/Header';
import Headline from './component/Headline/Headline';
import './App.scss'; 

function App() {
  return (
    <div >
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
