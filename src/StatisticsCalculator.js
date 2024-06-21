import React, { useState } from "react";

const StatisticsCalculator = () => {
  // State hooks for managing the input and result
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});

  const calculateStatistics = () => {
    // Split the input string into an array of numbers
    const numbers = input.trim().split(" ").map(Number);
    if (numbers.length > 100) {
      alert("Please enter no more than 100 numbers.");
      return;
    }
    if (numbers.length === 0 || numbers.some(isNaN)) {
      alert("Please enter valid numbers separated by spaces.");
      return;
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const range = max - min;
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const median = calculateMedian(numbers);
    const variance =
      numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (numbers.length - 1);
    const stdDev = Math.sqrt(variance);
    const q1 = calculatePercentile(numbers, 0.25);
    const q3 = calculatePercentile(numbers, 0.75);
    const iqr = q3 - q1;
    const outlierMin = q1 - 1.5 * iqr;
    const outlierMax = q3 + 1.5 * iqr;

    // Update the result state with formatted values (4 decimals)
    const rawResult = {
      min,
      max,
      range,
      mean,
      median,
      stdDev,
      variance,
      q1,
      q3,
      iqr,
      outlierMin,
      outlierMax,
    };
    setResult(formatResult(rawResult));
  };

  const calculateMedian = (numbers) => {
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    return numbers.length % 2 !== 0
      ? numbers[mid]
      : (numbers[mid - 1] + numbers[mid]) / 2;
  };

  const calculatePercentile = (numbers, percentile) => {
    numbers.sort((a, b) => a - b);
    const index = percentile * (numbers.length - 1);
    const lower = Math.floor(index);
    const upper = lower + 1;
    const weight = index % 1;

    if (upper >= numbers.length) return numbers[lower];
    return numbers[lower] * (1 - weight) + numbers[upper] * weight;
  };

  // Function to format the result with four decimal places
  const formatResult = (result) => {
    const formattedResult = {};
    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        formattedResult[key] = result[key].toFixed(4);
      }
    }
    return formattedResult;
  };

  return (
    <div>
      <h2>Local Tools</h2>
      <div className="calculator-container">
        <h2>Basic Statistics Calculator</h2>
        <p className="instructions">
          In order to calculate the mean, standard deviation, quartiles, and
          other values, please enter up to 100 numbers separated by spaces.
          Example: 3 12 23 17...
        </p>
        <div className="input-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter numbers separated by space"
            rows="4"
            cols="50"
          />
          <button onClick={calculateStatistics}>Calculate</button>
        </div>
        {result.mean !== undefined && (
          <div className="results">
            <div className="column">
              <p>Min: {result.min}</p>
              <p>Max: {result.max}</p>
              <p>Range: {result.range}</p>
              <p>Mean: {result.mean}</p>
              <p>Median: {result.median}</p>
              <p>Variance: {result.variance}</p>
            </div>
            <div className="column">
              <p>Sample Standard Deviation: {result.stdDev}</p>
              <p>Q1: {result.q1}</p>
              <p>Q3: {result.q3}</p>
              <p>IQR: {result.iqr}</p>
              <p>OutlierMin: Q1 - 1.5 * IQR = {result.outlierMin}</p>
              <p>OutlierMax: Q3 + 1.5 * IQR = {result.outlierMax}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsCalculator;
