<H1 align="left">Bubble Visualization
</H1>

<h2>Overview</h2>
This project is a React-based interactive bubble visualization that displays cryptocurrency data. The bubbles represent different cryptocurrencies, and their size and color are determined by their 24-hour price change percentage. Users can interact with the visualization by clicking and dragging the bubbles.
</hr>

Features
Interactive Bubble Visualization: The visualization uses D3.js to create an interactive bubble chart that responds to user input.
Real-time Data: The project fetches data from a JSON file and updates the visualization in real-time.
Responsive Design: The visualization is responsive and adapts to different screen sizes and devices.
Touch Support: The project includes touch event listeners for mobile devices.

</hr>
<h2>Getting Started
</h2>
<h3>Installation
</h3>

Clone the repository: git clone https://github.com/mostafarostami70/bubble-visualization.git
Install dependencies: npm install
Start the development server: npm start
</hr>

<h3>Usage
</h3>
Open the project in your web browser: http://localhost:3000
Interact with the visualization by clicking and dragging the bubbles.
</hr>

<h3>Technical Details
</h3>


Technologies Used
React: The project uses React for building the user interface.
D3.js: D3.js is used for creating the interactive bubble chart.
Axios: Axios is used for fetching data from the JSON file.
</hr>

Data Format
The project expects the data to be in the following format:
json
<dode>{
  "result": [
    {
      "symbol": "BTC",
      "price_change_percentage_24h": 5.23
    },
    {
      "symbol": "ETH",
      "price_change_percentage_24h": -2.15
    },
    ...
  ]
}
</code>
Customization
You can customize the visualization by modifying the Bubble.js file. You can change the appearance of the bubbles, the forces used in the simulation, and the event listeners.

License
This project is licensed under the MIT License.

Contributing

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

Contributions are welcome If you'd like to contribute to the project, please fork the repository and submit a pull request.

Acknowledgments
This project was built using React, D3.js, and Axios. Special thanks to the developers of these libraries for making them available.
