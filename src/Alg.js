import React, { Component } from "react";

class Alg extends Component {
    render() {
        return(
            <div>
            <img src="alg.png" alt="Logo image of algebra" class="logo" ></img>
          <h1>College Algebra Class Tools</h1>
                           
        <h2>Online Calculator and Web Apps</h2> 
        <p>
          <table>
            <thead> 
              <tr>
                <th class="colwidth">Link</th>
                <th>Description</th>
              </tr>        
            </thead>
            <tbody>
              <tr>
                <td class="bolder"><a href="https://openomnia.com/calculator" target="_blank" rel="noopener noreferrer">Calculator 1</a></td>
                <td> Scientific calculator for general porpuses</td>
              </tr>
              <tr>
                <td  class="bolder"><a href="https://openomnia.com/graphing-calculator" target="_blank" rel="noopener noreferrer">Calculator 2</a></td>
                <td> Graphing calculator</td>
              </tr> 
              <tr>
                <td  class="bolder"><a href="https://openomnia.com/equation-calculator" target="_blank" rel="noopener noreferrer">Calculator 3</a></td>
                <td> Equation calculator</td>
              </tr>
           
            </tbody>
          </table>
        </p>   
        </div>
    );
}
}
export default Alg;