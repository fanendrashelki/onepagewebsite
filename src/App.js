import Main from "./Main";
import Navbar from "./Navbar";
import Card from "./Card";
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>

      {
        data.map((val) => {
          return (
            <Card
              id={val.id}
              img={val.ImageUrl}
              name={val.Name}
              short={val.ShortDesc} />
          );

        })}
    </div>
  );
}

export default App;
