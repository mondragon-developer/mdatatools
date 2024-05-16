import React, { Component } from "react";

class Sta extends Component {
    render() {
        return(
             <div>
                <img src="sta.png" alt="Logo image of statistics" class="logo" ></img>
              <h1>Statistics Class Tools</h1>
                               
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
                    <td class="bolder"><a href="https://openomnia.com/mean-median-variance-sd" target="_blank" rel="noopener noreferrer">Calculator 1</a></td>
                    <td> You can use this grouped frequency distribution calculator to identify the class interval (or width) and subsequently generate a grouped frequency table to represent the data.
                    © 2015-2024 goodcalculators.com</td>
                  </tr>
                  <tr>
                    <td  class="bolder"><a href="https://openomnia.com/mean-median-variance-sd" target="_blank" rel="noopener noreferrer">Calculator 2</a></td>
                    <td> Mean, Median, Variance, Standard Deviation Calculator with Steps.</td>
                  </tr> 
                  <tr>
                    <td  class="bolder"><a href="https://www.calculator.net/z-score-calculator.html" target="_blank" rel="noopener noreferrer">Calculator 3</a></td>
                    <td> Use this calculator to compute the z-score of a normal distribution.</td>
                  </tr>
               
                </tbody>
              </table>
            </p>   
            </div>
        );
    }
}
export default Sta;