import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {details : [], }
  componentDidMount() {
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details : data
      });
    })
    .catch(err => { })
  }

    render(){
      return(
        <div>
          <header> Data Generated From Django</header> 
          <hr></hr>
          {this.state.details.map((output, id) => (
            <div key={id}>
              <h2>{output.employee}</h2>
              <h3>{output.departement}</h3>
            </div>
          ))}
        </div>
      )
    }
};

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h1>
//           RYADDDD
//         </h1>
//       </div>
//     </div>
//   );
// }

export default App;
