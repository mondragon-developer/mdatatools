import React, { Component } from "react";
import algImage from "./images/image.png"

class Alg extends Component {
    render() {
        return(
        <div>
            <div class="sideImage">
              <img src= { algImage } alt="Logo of algebra" className = "logo" ></img>
            </div>
          <h1>College Algebra Class Tools</h1>
                           
        <h2>Online Calculator and Web Apps</h2> 
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
                <td> Scientific calculator for general purposes with examples and explanation of functions</td> 
              </tr>
              <tr>
                <td  class="bolder"><a href="https://openomnia.com/graphing-calculator" target="_blank" rel="noopener noreferrer">Calculator 2</a></td>
                <td> Graphing calculator with option for polar and parametric curves</td>
              </tr> 
              <tr>
                <td  class="bolder"><a href="https://openomnia.com/equation-calculator" target="_blank" rel="noopener noreferrer">Calculator 3</a></td>
                <td> Equation calculator with solution and step by step process</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}
}
export default Alg;