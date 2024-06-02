import React, { Component } from "react";
import PdfLinks from "./PdfLinks";
import StatisticsCalculator from "./StatisticsCalculator";

class Sta extends Component {
  render() {
    return (
      <div>
        <div className="sideImage">S</div>
        <h1>Statistics Class Tools</h1>

        <h2>Online Calculator and Web Apps</h2>
        <div className="table-container">
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
                <td className="description">
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
                <td className="description">
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
                <td className="description">
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
                <td className="description">
                  {" "}
                  Distribution calculator for the following distributions:
                  Normal, Binomial, Student's t, F, Chi-Square, Poisson,
                  Weibull, Exponential, and Uniform.
                </td>
              </tr>
              <tr>
                <td className="bolder">
                  <a
                    href="https://www.analyticscalculators.com/calculator.aspx?id=96"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 5
                  </a>
                </td>
                <td className="description">
                  {" "}
                  Compute the 90%, 95%, and 99% confidence intervals for the
                  mean of a normal population, given the sample standard
                  deviation, the sample mean, and the sample size.
                </td>
              </tr>
              <tr>
                <td className="bolder">
                  <a
                    href="https://www.analyticscalculators.com/calculator.aspx?id=95"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 6
                  </a>
                </td>
                <td className="description">
                  {" "}
                  Compute the 90%, 95%, and 99% confidence intervals for the
                  mean of a normal population
                  <b> when the population standard deviation is known</b>, given
                  the population standard deviation, the sample mean, and the
                  sample size.
                </td>
              </tr>
              <tr>
                <td className="bolder">
                  <a
                    href="https://365datascience.com/calculators/hypothesis-test-calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculator 7
                  </a>
                </td>
                <td className="description">
                  {" "}
                  Hypothesis Test Calculator (Single Population)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
