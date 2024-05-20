Bubble Visualization

Overview
This project is a React-based interactive bubble visualization that displays cryptocurrency data. The bubbles represent different cryptocurrencies, and their size and color are determined by their 24-hour price change percentage. Users can interact with the visualization by clicking and dragging the bubbles.
--------------------------------------------------
Features
Interactive Bubble Visualization: The visualization uses D3.js to create an interactive bubble chart that responds to user input.
Real-time Data: The project fetches data from a JSON file and updates the visualization in real-time.
Responsive Design: The visualization is responsive and adapts to different screen sizes and devices.
Touch Support: The project includes touch event listeners for mobile devices.
----------------
Getting Started
Installation
Clone the repository: git clone https://github.com/mostafarostami70/bubble-visualization.git
Install dependencies: npm install
Start the development server: npm start

Usage
Open the project in your web browser: http://localhost:3000
Interact with the visualization by clicking and dragging the bubbles.

Technical Details

Technologies Used
React: The project uses React for building the user interface.
D3.js: D3.js is used for creating the interactive bubble chart.
Axios: Axios is used for fetching data from the JSON file.

Data Format
The project expects the data to be in the following format:
json
{
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

Customization
You can customize the visualization by modifying the Bubble.js file. You can change the appearance of the bubbles, the forces used in the simulation, and the event listeners.

License
This project is licensed under the MIT License.

Contributing
Contributions are welcome If you'd like to contribute to the project, please fork the repository and submit a pull request.

Acknowledgments
This project was built using React, D3.js, and Axios. Special thanks to the developers of these libraries for making them available.
