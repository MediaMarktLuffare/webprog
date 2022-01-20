import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="container py-4">
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Rubrik för labboration 2</span>
    </header>

    <div className="col-12">
      <div className="h-200 p-5 bg-light border rounded-3">
        <h2>Compose a salad</h2>
        <p>This part of the page should be moved to a component</p>
        <button className="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>

    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering
    </footer>

  </div>

  );
}

export default App;
