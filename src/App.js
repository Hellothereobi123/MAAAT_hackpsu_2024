//App.tsx

import "./App.css";
import Map from "./Map";
import Fileupload from "./Fileupload.js"
import DataDisplay from "./Back_end.js"

export default function App() {
  return (
    
    <div className="App">
      <div>
      <DataDisplay />
      </div>
      <div>
      <Fileupload />
      </div>
      <div>
      <Map />
      </div>

    </div>

  );
}