# 🔢 NSP

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-brightgreen)](https://your-username.github.io/number-system-converter)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An advanced, interactive tool for number system conversion, arithmetic operations, and base finding problems. Perfect for students, educators, and computer science professionals.

![Number System Pro Screenshot](screenshot.png)

## ✨ Features

### 🌐 Main Bases Converter
- Real-time conversion between the 4 most common bases:
  - Binary (Base 2)
  - Octal (Base 8)
  - Decimal (Base 10)
  - Hexadecimal (Base 16)
- Accepts input in **any** of the 4 bases
- Clickable cards to view detailed conversion steps
- Input validation specific to each base

### 🔢 General Base Converter
- Convert between any bases from 2 to 36
- Step-by-step conversion process:
  1. Convert to decimal
  2. Convert to target base
- Clear error messages for invalid inputs

### ➕ Arithmetic Calculator
- Perform calculations in any base (2-36)
- Four operations supported:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
- Three-step calculation process with detailed explanations

### 🔍 Base Finder
- Solve base finding problems like `(12)r + (13)r = (25)r`
- Complete 5-step solution process:
  1. Convert each number to base 10
  2. Set up the equation in base 10
  3. Simplify both sides
  4. Solve
  5. Apply base constraints
- Handles multiple valid bases, single solutions, and no solutions

### 📚 User Manual
- Practical, usage-focused guide
- Step-by-step instructions with realistic screenshots
- Examples of common tasks
- Detailed explanation of corner cases

## 🚀 Live Demo

Try it now: [https://your-username.github.io/number-system-converter](https://your-username.github.io/number-system-converter)

> **Note**: Replace "your-username" with your actual GitHub username after deployment.

## 🛠 How to Use

### Main Bases Converter
1. Select your source base (binary, octal, decimal, or hex)
2. Enter your value in the input field
3. Watch as all four representations update in real-time
4. Click on any value to see detailed conversion steps

### General Base Converter
1. Select your source base from the dropdown
2. Select your target base from the dropdown
3. Enter your value in the input field
4. Click "Convert" to see the result and detailed steps

### Arithmetic Calculator
1. Select the base for your calculation
2. Enter the first number
3. Choose the operation (+, -, ×, ÷)
4. Enter the second number
5. Click "Calculate" to see the result and detailed steps

### Base Finder
1. Enter your equation using the format "(12)r + (13)r = (25)r"
2. Optionally set minimum and maximum base values
3. Click "Find Valid Bases" to see the solution with detailed steps

## 🧪 Corner Cases Handled

### Multiple Valid Bases
For equations like `(12)r + (13)r = (25)r`, the solution is `r > 5` because:
- The equation holds for all bases greater than 5
- The largest digit is 5, so base must be > 5

### Single Valid Base
For equations like `(12)r + (13)r = (30)r`, the solution is `r = 5` because:
- Solving gives r = 5
- Verification: (12)₅ + (13)₅ = 7 + 8 = 15 = (30)₅ ✓

### No Valid Base
For equations like `(12)r = (5)r`, there is no solution because:
- This would require 1×r + 2 = 5, so r = 3
- But base 3 cannot have digit '5'

### Fractional Results
For division operations that result in fractions:
- (10)r ÷ (2)r = 5 (for r > 5)
- In bases where both numbers are valid (r > 5), this equals 5 in decimal

## 🚀 Deployment

This project is designed to be hosted on GitHub Pages. Here's how to deploy it:

### Manual Setup
1. Create a new GitHub repository
2. Clone the repository to your local machine
3. Copy the project files into the repository
4. Push the changes to GitHub
5. Enable GitHub Pages in repository settings

### Using the Setup Script
```bash
# Create and run the setup script
curl -o setup.sh https://raw.githubusercontent.com/your-username/number-system-converter/main/setup.sh
chmod +x setup.sh
./setup.sh

# Push to GitHub
cd number-system-converter
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/number-system-converter.git
git push -u origin main