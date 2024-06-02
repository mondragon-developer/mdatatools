import React, { Component } from "react";
import staImage from "./images/statistics.png";
import PdfLinks from "./PdfLinks";
import StatisticsCalculator from "./StatisticsCalculator";

class Sta extends Component {
  render() {
    return (
      <div>
        <div class="sideImage">
          <img src={staImage} alt="Logo of statistics" className="logo"></img>
        </div>
        <h1>Statistics Class Tools</h1>

        <h2>Online Calculator and Web Apps</h2>
        <p>
          <table>
            <thead>
              <tr>
                <th className="colwidth">Link</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bolder">
                  <a
                    href="https://goodcalculators.com/grouped-frequency-distribution-calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 1
                  </a>
                </td>
                <td>
                  {" "}
                  Frequency distribution calculator to identify the class
                  interval (or width) and generate a grouped frequency table to
                  represent the data.
                </td>
              </tr>
              <tr>
                <td className="bolder">
                  <a
                    href="https://openomnia.com/mean-median-variance-sd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 2
                  </a>
                </td>
                <td>
                  {" "}
                  Mean, Median, Variance, Standard Deviation Calculator with
                  Steps.
                </td>
              </tr>
              <tr>
                <td className="bolder">
                  <a
                    href="https://www.calculator.net/z-score-calculator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 3
                  </a>
                </td>
                <td>
                  {" "}
                  Use this calculator to compute the z-score of a normal
                  distribution.
                </td>
              </tr>
              <tr>
                <td className="bolder">
                  <a
                    href="https://www.statskingdom.com/distribution-calculator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 4{" "}
                  </a>
                </td>
                <td>
                  {" "}
                  Distribution calculator for the following distributions:
                  Normal, Binomial, Student's t, F, Chi-Square, Poisson,
                  Weibull, Exponential, and Uniform.
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <section>
          <PdfLinks />
        </section>
        <section>
          <StatisticsCalculator />
        </section>
      </div>
    );
  }
}
export default Sta;
