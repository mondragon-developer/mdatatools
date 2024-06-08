import React, { useState } from 'react';
import { jStat } from 'jstat';


const TestCalculator = () => {
    const [testType, setTestType] = useState('proportion');
    const [tailType, setTailType] = useState('two-tailed');
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInputs({
            ...inputs,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleTestTypeChange = (e) => {
        setTestType(e.target.value);
        setInputs({});
        setResult({});
    };

    const handleTailTypeChange = (e) => {
        setTailType(e.target.value);
    };

    const calculate = () => {
        if (testType === 'proportion') {
            calculateProportionTest();
        } else {
            calculateMeanTest();
        }
    };

    const calculateProportionTest = () => {
        const { sampleProportion, hypothesizedProportion, sampleSize, significanceLevel } = inputs;
        const z = (sampleProportion - hypothesizedProportion) / Math.sqrt((hypothesizedProportion * (1 - hypothesizedProportion)) / sampleSize);
        const criticalValue = getCriticalValue(significanceLevel, 'z', tailType);
        const pValue = getPValue(z, 'z', tailType);

        setResult({ testStatistic: z.toFixed(4), criticalValue: criticalValue.toFixed(4), pValue: pValue.toFixed(4) });
    };

    const calculateMeanTest = () => {
        const { sampleMean, hypothesizedMean, sampleSize, stdDev, significanceLevel, stdDevType } = inputs;
        let t, criticalValue, pValue;
        if (stdDevType === 'known') {
            t = (sampleMean - hypothesizedMean) / (stdDev / Math.sqrt(sampleSize));
            criticalValue = getCriticalValue(significanceLevel, 'z', tailType);
            pValue = getPValue(t, 'z', tailType);
        } else {
            t = (sampleMean - hypothesizedMean) / (stdDev / Math.sqrt(sampleSize));
            criticalValue = getCriticalValue(significanceLevel, 't', tailType, sampleSize - 1);
            pValue = getPValue(t, 't', tailType, sampleSize - 1);
        }

        setResult({ testStatistic: t.toFixed(4), criticalValue: criticalValue.toFixed(4), pValue: pValue.toFixed(4) });
    };

    const getCriticalValue = (alpha, distribution, tailType, df) => {
        if (distribution === 'z') {
            if (tailType === 'two-tailed') {
                return -1 * Math.abs(jStat.normal.inv(alpha / 2, 0, 1));
            } else if (tailType === 'right-tailed') {
                return jStat.normal.inv(1 - alpha, 0, 1);
            } else {
                return jStat.normal.inv(alpha, 0, 1);
            }
        } else {
            if (tailType === 'two-tailed') {
                return -1 * Math.abs(jStat.studentt.inv(alpha / 2, df));
            } else if (tailType === 'right-tailed') {
                return jStat.studentt.inv(1 - alpha, df);
            } else {
                return jStat.studentt.inv(alpha, df);
            }
        }
    };

    const getPValue = (testStatistic, distribution, tailType, df) => {
        if (distribution === 'z') {
            if (tailType === 'two-tailed') {
                return 2 * (1 - jStat.normal.cdf(Math.abs(testStatistic), 0, 1));
            } else if (tailType === 'right-tailed') {
                return 1 - jStat.normal.cdf(testStatistic, 0, 1);
            } else {
                return jStat.normal.cdf(testStatistic, 0, 1);
            }
        } else {
            if (tailType === 'two-tailed') {
                return 2 * (1 - jStat.studentt.cdf(Math.abs(testStatistic), df));
            } else if (tailType === 'right-tailed') {
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
            This tool is designed to help you perform hypothesis tests for both proportions and means. 
            It allows you to calculate the test statistic, critical value, and p-value for your data.
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
                {testType === 'proportion' ? (
                    <div>
                        <div className="form-group">
                            <label>Sample Proportion (p̂):</label>
                            <input type="number" step="0.0001" name="sampleProportion" value={inputs.sampleProportion || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Hypothesized Proportion (p₀):</label>
                            <input type="number" step="0.0001" name="hypothesizedProportion" value={inputs.hypothesizedProportion || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Sample Size (n):</label>
                            <input type="number" name="sampleSize" value={inputs.sampleSize || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Significance Level (α):</label>
                            <input type="number" step="0.01" name="significanceLevel" value={inputs.significanceLevel || ''} onChange={handleChange} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label>Sample Mean (x̄):</label>
                            <input type="number" step="0.0001" name="sampleMean" value={inputs.sampleMean || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Hypothesized Mean (μ₀):</label>
                            <input type="number" step="0.0001" name="hypothesizedMean" value={inputs.hypothesizedMean || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Sample Size (n):</label>
                            <input type="number" name="sampleSize" value={inputs.sampleSize || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Standard Deviation (σ or s):</label>
                            <input type="number" step="0.0001" name="stdDev" value={inputs.stdDev || ''} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Standard Deviation Type:</label>
                            <div>
                                <label>
                                    <input type="radio" name="stdDevType" value="known" checked={inputs.stdDevType === 'known'} onChange={handleChange} />
                                    Known
                                </label>
                                <label>
                                    <input type="radio" name="stdDevType" value="unknown" checked={inputs.stdDevType === 'unknown'} onChange={handleChange} />
                                    Unknown
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Significance Level (α):</label>
                            <input type="number" step="0.01" name="significanceLevel" value={inputs.significanceLevel || ''} onChange={handleChange} />
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
                </div>
            )}
        </div>
    );
};

export default TestCalculator;

