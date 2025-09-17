# latihan-pembuatan-soal-vite

[![TypeScript](https://img.shields.io/badge/Primary%20Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

No description provided for this repository.

## Key Features and Highlights

- Utilizes TypeScript for development
- Dependencies include chart.js, react, react-chartjs-2, react-dom, tailwindcss

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Usage

Here is an example of how to use this project:

```typescript
import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const MyBarChart = () => (
  <div>
    <h2>Sales Chart</h2>
    <Bar data={data} />
  </div>
);

export default MyBarChart;
```

## Dependencies

- [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite): ^4.1.13
- [chart.js](https://www.npmjs.com/package/chart.js): ^4.5.0
- [react](https://www.npmjs.com/package/react): ^19.1.1
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2): ^5.3.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.1.1
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.1.13

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
