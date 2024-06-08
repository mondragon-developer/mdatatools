import React, { useState } from "react";
import { jStat } from "jstat";

const TestCalculator = () => {
    // State variables to manage inputs, test type, tail type, inclusion of confidence interval, and results
    const [testType, setTestType] = useState("proportion");
    const [tailType, setTailType] = useState("two-tailed");
    const [includeConfidenceInterval, setIncludeConfidenceInterval] = useState(false);
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState({});
  
    // Handle changes in input fields and update the state accordingly
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setInputs({
        ...inputs,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    // Handle changes in test type and reset inputs and results when the test type changes
    const handleTestTypeChange = (e) => {
      setTestType(e.target.value);
      setInputs({});
      setResult({});
    };
  
    // Handle changes in tail type
    const handleTailTypeChange = (e) => {
      setTailType(e.target.value);
    };
  
    // Main function to calculate the results based on the selected test type
    const calculate = () => {
      if (testType === "proportion") {
        calculateProportionTest();
      } else {
        calculateMeanTest();
      }
    };
  
    // Function to calculate the test statistic, critical value, p-value, and confidence interval (if included) for a proportion test
    const calculateProportionTest = () => {
      const {
        sampleProportion,
        hypothesizedProportion,
        sampleSize,
        significanceLevel,
      } = inputs;
  
      // Parsing input values to ensure they are numbers
      const sampleProp = parseFloat(sampleProportion);
      const hypothesizedProp = parseFloat(hypothesizedProportion);
      const sampleSz = parseInt(sampleSize);
      const sigLevel = parseFloat(significanceLevel);
  
      // Calculate the z-test statistic
      const z = (sampleProp - hypothesizedProp)/Math.sqrt((hypothesizedProp * (1 - hypothesizedProp)) / sampleSz);

      // Get the critical value based on the significance level, distribution type, and tail type
      const criticalValue = getCriticalValue(sigLevel, "z", tailType);

      // Get the p-value based on the test statistic, distribution type, and tail type
      const pValue = getPValue(z, "z", tailType);
  
      // Calculate the confidence interval if included
      let confidenceInterval;
      if (includeConfidenceInterval) {
        const marginOfError =
          Math.abs(criticalValue) *
          Math.sqrt((sampleProp * (1 - sampleProp)) / sampleSz);
        confidenceInterval = [
          (sampleProp - marginOfError).toFixed(4),
          (sampleProp + marginOfError).toFixed(4),
        ];
      }
  
      // Update the result state with the calculated values
      setResult({
        testStatistic: z.toFixed(4),
        criticalValue: criticalValue.toFixed(4),
        pValue: pValue.toFixed(4),
        confidenceInterval,
      });
    };
  
    // Function to calculate the test statistic, critical value, p-value, and confidence interval (if included) for a mean test
    const calculateMeanTest = () => {
      const {
        sampleMean,
        hypothesizedMean,
        sampleSize,
        stdDev,
        significanceLevel,
        stdDevType,
      } = inputs;
  
      // Parsing input values to ensure they are numbers
      const sampleMeanNum = parseFloat(sampleMean);
      const hypothesizedMeanNum = parseFloat(hypothesizedMean);
      const sampleSizeNum = parseInt(sampleSize);
      const stdDevNum = parseFloat(stdDev);
      const significanceLevelNum = parseFloat(significanceLevel);
  
      // Variables to store the test statistic, critical value, and p-value
      let t, criticalValue, pValue;

      // Calculate based on whether the population standard deviation is known or unknown
      if (stdDevType === "known") {
        t =
          (sampleMeanNum - hypothesizedMeanNum) /
          (stdDevNum / Math.sqrt(sampleSizeNum));
        criticalValue = getCriticalValue(significanceLevelNum, "z", tailType);
        pValue = getPValue(t, "z", tailType);
      } else {
        t =
          (sampleMeanNum - hypothesizedMeanNum) /
          (stdDevNum / Math.sqrt(sampleSizeNum));
        criticalValue = getCriticalValue(
          significanceLevelNum,
          "t",
          tailType,
          sampleSizeNum - 1
        );
        pValue = getPValue(t, "t", tailType, sampleSizeNum - 1);
      }
  
      // Calculate the confidence interval if included
      let confidenceInterval;
      if (includeConfidenceInterval) {
        const marginOfError =
          Math.abs(criticalValue) * (stdDevNum / Math.sqrt(sampleSizeNum));
        confidenceInterval = [
          (sampleMeanNum - marginOfError).toFixed(4),
          (sampleMeanNum + marginOfError).toFixed(4),
        ];
      }
  
      // Update the result state with the calculated values
      setResult({
        testStatistic: t.toFixed(4),
        criticalValue: criticalValue.toFixed(4),
        pValue: pValue.toFixed(4),
        confidenceInterval,
      });
    };
  
    // Function to get the critical value based on the significance level, distribution type, tail type, and degrees of freedom
    const getCriticalValue = (alpha, distribution, tailType, df) => {
      if (distribution === "z") {
        if (tailType === "two-tailed") {
          return -1 * Math.abs(jStat.normal.inv(alpha / 2, 0, 1));
        } else if (tailType === "right-tailed") {
          return jStat.normal.inv(1 - alpha, 0, 1);
        } else {
          return jStat.normal.inv(alpha, 0, 1);
        }
      } else {
        if (tailType === "two-tailed") {
          return -1 * Math.abs(jStat.studentt.inv(alpha / 2, df));
        } else if (tailType === "right-tailed") {
          return jStat.studentt.inv(1 - alpha, df);
        } else {
          return jStat.studentt.inv(alpha, df);
        }
      }
    };
  
    // Function to get the p-value based on the test statistic, distribution type, tail type, and degrees of freedom
    const getPValue = (testStatistic, distribution, tailType, df) => {
      if (distribution === "z") {
        if (tailType === "two-tailed") {
          return 2 * (1 - jStat.normal.cdf(Math.abs(testStatistic), 0, 1));
        } else if (tailType === "right-tailed") {
          return 1 - jStat.normal.cdf(testStatistic, 0, 1);
        } else {
          return jStat.normal.cdf(testStatistic, 0, 1);
        }
      } else {
        if (tailType === "two-tailed") {
          return 2 * (1 - jStat.studentt.cdf(Math.abs(testStatistic), df));
        } else if (tailType === "right-tailed") {
          return 1 - jStat.studentt.cdf(testStatistic, df);
        } else {
          return jStat.studentt.cdf(testStatistic, df);
        }
      }
    };
  

  return (
    <div className="calculator-container">
      <h2>Statistical Test Calculator</h2>
      <p className="instructions">
        This tool is designed to help you perform hypothesis tests for both
        proportions and means. It allows you to calculate the test statistic,
        critical value, and p-value for your data.
      </p>
      <div className="input-container">
        <div className="form-group">
          <label>Test Type:</label>
          <select value={testType} onChange={handleTestTypeChange}>
            <option value="proportion">Proportion</option>
            <option value="mean">Mean</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tail Type:</label>
          <select value={tailType} onChange={handleTailTypeChange}>
            <option value="two-tailed">Two-Tailed</option>
            <option value="right-tailed">Right-Tailed</option>
            <option value="left-tailed">Left-Tailed</option>
          </select>
        </div>
        {testType === "proportion" ? (
          <div>
            <div className="form-group">
              <label>Sample Proportion (p̂):</label>
              <input
                type="number"
                step="0.0001"
                name="sampleProportion"
                value={inputs.sampleProportion || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Hypothesized Proportion (p₀):</label>
              <input
                type="number"
                step="0.0001"
                name="hypothesizedProportion"
                value={inputs.hypothesizedProportion || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Sample Size (n):</label>
              <input
                type="number"
                name="sampleSize"
                value={inputs.sampleSize || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Significance Level (α):</label>
              <input
                type="number"
                step="0.01"
                name="significanceLevel"
                value={inputs.significanceLevel || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="includeConfidenceInterval"
                  checked={includeConfidenceInterval}
                  onChange={(e) =>
                    setIncludeConfidenceInterval(e.target.checked)
                  }
                />
                Include Confidence Interval
              </label>
            </div>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label>Sample Mean (x̄):</label>
              <input
                type="number"
                step="0.0001"
                name="sampleMean"
                value={inputs.sampleMean || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Hypothesized Mean (μ₀):</label>
              <input
                type="number"
                step="0.0001"
                name="hypothesizedMean"
                value={inputs.hypothesizedMean || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Sample Size (n):</label>
              <input
                type="number"
                name="sampleSize"
                value={inputs.sampleSize || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Standard Deviation (σ or s):</label>
              <input
                type="number"
                step="0.0001"
                name="stdDev"
                value={inputs.stdDev || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Population Standard Deviation:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="stdDevType"
                    value="known"
                    checked={inputs.stdDevType === "known"}
                    onChange={handleChange}
                  />
                  Known
                </label>
                <label>
                  <input
                    type="radio"
                    name="stdDevType"
                    value="unknown"
                    checked={inputs.stdDevType === "unknown"}
                    onChange={handleChange}
                  />
                  Unknown
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Significance Level (α):</label>
              <input
                type="number"
                step="0.01"
                name="significanceLevel"
                value={inputs.significanceLevel || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="includeConfidenceInterval"
                  checked={includeConfidenceInterval}
                  onChange={(e) =>
                    setIncludeConfidenceInterval(e.target.checked)
                  }
                />
                Include Confidence Interval
              </label>
            </div>
          </div>
        )}
        <button onClick={calculate}>Calculate</button>
      </div>
      {result.testStatistic !== undefined && (
        <div className="results">
          <p>Test Statistic: {result.testStatistic}</p>
          <p>Critical Value: {result.criticalValue}</p>
          <p>P-Value: {result.pValue}</p>
          {result.confidenceInterval && (
            <p>
              Confidence Interval: [{result.confidenceInterval[0]},{" "}
              {result.confidenceInterval[1]}]
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TestCalculator;
