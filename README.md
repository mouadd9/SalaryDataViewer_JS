# Salary Data Viewer

## Overview

The Salary Data Viewer is an interactive web application that allows users to explore salary data across various roles and companies in the tech industry. It dynamically generates UI components for users to select specific roles and companies, and displays relevant salary statistics.

## Features

- **Dynamic Selection**: Users can select a role and a company from dynamically generated radio buttons to view salary details.
- **Salary Calculations**: Displays specific salary, average salary by role, by company, and the overall industry average.
- **Interactive UI**: Immediate updates to salary information based on user selections.

## Structure

- `main.js`: Manages the application's main functionality, including UI interactions and rendering.
- `modules/salaryData.js`: Contains the salary data and functions to fetch roles, companies, and specific salary data.
- `modules/calculationsModule.js`: Handles calculations for average salaries and specific salary lookups.
- `index.html`: The main HTML document.
- `index.css`: Styling for the application.

## Setup

1. Clone the repository.
2. Open `index.html` in a modern web browser that supports JavaScript ES6 modules.

## Usage

Select a role and a company from the options provided to view the corresponding salary data. Results will display below the selection area.

## Contributing

Contributions to extend functionality or improve the application are welcome. Please submit a pull request or open an issue if you have suggestions.
