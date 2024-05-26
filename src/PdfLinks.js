import React from 'react';

const PdfLinks = () => {
  return (
    <div>
      <h2>Downloadable PDFs</h2>
      <table>
        <thead>
          <tr>
            <th className="colwidth">Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bolder'><a href="mdatatools/pdfs/t-table.pdf" download>t-table</a></td>
            <td>t table (same as t distribution table, t score table, Student’s t table) t critical value by confidence level & DF for the Student’s t distribution.</td>
          </tr>
          <tr>
            <td className='bolder'><a href="mdatatools/pdfs/Z-table.pdf" download>Z-table</a></td>
            <td>z table, also referred as z score table, standard normal distribution table and z value chart, to find a z score.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PdfLinks;
