# Logo Maker

Logo Maker is a command-line application that allows users to create simple logos using basic shapes and text.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Output](#output)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)
- [Credits](#credits)

## Features

- Accepts user input for text (up to three characters), text color, shape, and shape color.
- Supports shapes: Circle, Triangle, and Square.
- Outputs an SVG file named `logo.svg` with the specified text and shape.

## Installation

To install Logo Maker, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/logo-maker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd logo-maker
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To run the Logo Maker application, follow these steps:

1. Navigate to the project directory:

    ```bash
    cd logo-maker
    ```

2. Run the application:

    ```bash
    node index.js
    ```

3. Follow the prompts to input your desired text, text color, shape, and shape color.

4. Once you have entered input for all the prompts, an SVG file named `logo.svg` will be created in the project directory.

To test the Logo Maker application using jest, follow these steps:

1. Inside the project directory, run the following command:

    ```bash
    npm test
    ```

## Example

Here is an example of how to create a logo using Logo Maker through the command line:

```bash
$ node index.js
? Enter up to three characters for the text: ABC
? Enter text color (color keyword or hexadecimal number): #000000
? Choose a shape: Circle
? Enter shape color (color keyword or hexadecimal number): #FF0000
Generated logo.svg
```

## Output

The logo.svg file will be created in the project directory and its code will look similar to the following:

```bash
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #f0f0f0;">
  <circle cx="150" cy="100" r="80" fill="#FF0000"/>
  <text x="150" y="100" fill="#000000" text-anchor="middle" font-family="Arial" font-size="48" alignment-baseline="middle" dominant-baseline="middle">ABC</text>
</svg>
```

To view the logo, please make sure to open the file in your browser of choice by entering the following command in a local terminal:
 ```bash
    open logo.svg
 ```

## Video Walkthrough
Please click this link to see a video walkthrough of a typical user experience for this module. You must be logged in with Google suite to access the video. 

[VIDEO HERE](https://drive.google.com/file/d/134eYmfTuDdvemsGsgp2Z45v6x85V3RAG/view)

## License

This project is licensed under the MIT License. 

## Credits

- Danny Kramer (dannylkramer@icloud.com) (https://github.com/dannylkramer)
- Northwestern University Coding Bootcamp
- Module 10 Challenge