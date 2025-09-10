document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Main Bases Converter Elements
    const sourceBaseMain = document.getElementById('source-base-main');
    const mainInput = document.getElementById('main-input');
    const binaryValue = document.getElementById('binary-value');
    const octalValue = document.getElementById('octal-value');
    const decimalValue = document.getElementById('decimal-value');
    const hexValue = document.getElementById('hex-value');
    const binaryDetails = document.getElementById('binary-details');
    const octalDetails = document.getElementById('octal-details');
    const decimalDetails = document.getElementById('decimal-details');
    const hexDetails = document.getElementById('hex-details');
    const mainInputError = document.getElementById('main-input-error');
    
    // General Converter Elements
    const sourceBase = document.getElementById('source-base');
    const targetBase = document.getElementById('target-base');
    const inputValue = document.getElementById('input-value');
    const convertBtn = document.getElementById('convert-btn');
    const conversionResult = document.getElementById('conversion-result');
    const conversionDetails = document.getElementById('conversion-details');
    const converterError = document.getElementById('converter-error');
    
    // Calculator Elements
    const calcBase = document.getElementById('calc-base');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation');
    const calculateBtn = document.getElementById('calculate-btn');
    const calcResult = document.getElementById('calc-result');
    const calcDetails = document.getElementById('calc-details');
    const num1Error = document.getElementById('num1-error');
    const num2Error = document.getElementById('num2-error');
    
    // Base Finder Elements
    const equation = document.getElementById('equation');
    const minBase = document.getElementById('min-base');
    const maxBase = document.getElementById('max-base');
    const findBaseBtn = document.getElementById('find-base-btn');
    const baseResult = document.getElementById('base-result');
    const baseDetails = document.getElementById('base-details');
    
    // Tab Switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
    
    // Validation Functions
    const isValidDigit = (digit, base) => {
        const digitValue = parseInt(digit, 36);
        return digitValue < base && digitValue >= 0;
    };
    
    const validateNumber = (value, base) => {
        if (!value) return { valid: false, message: 'Input cannot be empty' };
        
        const digits = value.split('');
        for (let i = 0; i < digits.length; i++) {
            const digit = digits[i].toUpperCase();
            if (!isValidDigit(digit, base)) {
                return { 
                    valid: false, 
                    message: `Invalid digit '${digit}' for base ${base}`,
                    invalidDigit: digit
                };
            }
        }
        return { valid: true };
    };
    
    const markInvalid = (element, message) => {
        element.classList.add('error');
        const errorElement = document.getElementById(`${element.id}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    };
    
    const clearInvalid = (element) => {
        element.classList.remove('error');
        const errorElement = document.getElementById(`${element.id}-error`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    };
    
    // Main Bases Converter Functions
    const updateMainBases = () => {
        const value = mainInput.value.trim();
        const sourceBase = parseInt(sourceBaseMain.value);
        
        // Clear previous details
        binaryDetails.style.display = 'none';
        octalDetails.style.display = 'none';
        decimalDetails.style.display = 'none';
        hexDetails.style.display = 'none';
        
        if (!value) {
            binaryValue.textContent = '-';
            octalValue.textContent = '-';
            decimalValue.textContent = '-';
            hexValue.textContent = '-';
            return;
        }
        
        // Validate input
        const validation = validateNumber(value, sourceBase);
        if (!validation.valid) {
            markInvalid(mainInput, validation.message);
            binaryValue.textContent = 'Invalid';
            octalValue.textContent = 'Invalid';
            decimalValue.textContent = 'Invalid';
            hexValue.textContent = 'Invalid';
            return;
        }
        
        clearInvalid(mainInput);
        
        try {
            // Convert to decimal first
            const decimal = parseInt(value, sourceBase);
            
            // Update values
            binaryValue.textContent = decimal.toString(2);
            octalValue.textContent = decimal.toString(8);
            decimalValue.textContent = decimal;
            hexValue.textContent = decimal.toString(16).toUpperCase();
            
            // Update details
            binaryDetails.innerHTML = `Converted to binary: ${value}<sub>${sourceBase}</sub> → ${binaryValue.textContent}`;
            octalDetails.innerHTML = `Converted to octal: ${value}<sub>${sourceBase}</sub> → ${octalValue.textContent}`;
            decimalDetails.innerHTML = `Decimal representation: ${value}<sub>${sourceBase}</sub> → ${decimalValue.textContent}`;
            hexDetails.innerHTML = `Converted to hexadecimal: ${value}<sub>${sourceBase}</sub> → ${hexValue.textContent}`;
        } catch (e) {
            binaryValue.textContent = 'Error';
            octalValue.textContent = 'Error';
            decimalValue.textContent = 'Error';
            hexValue.textContent = 'Error';
        }
    };
    
    // Set up main bases card details
    const setupMainBasesDetails = () => {
        const cards = document.querySelectorAll('.conversion-card');
        cards.forEach(card => {
            const details = card.querySelector('.conversion-details');
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
    };
    
    // Event Listeners for Main Bases
    mainInput.addEventListener('input', updateMainBases);
    sourceBaseMain.addEventListener('change', updateMainBases);
    
    // General Base Conversion Functions
    const convertToDecimal = (value, base) => {
        return parseInt(value, base);
    };
    
    const convertFromDecimal = (decimalValue, targetBase) => {
        if (decimalValue === 0) return '0';
        return decimalValue.toString(targetBase).toUpperCase();
    };
    
    const convertBase = () => {
        const base = parseInt(sourceBase.value);
        const target = parseInt(targetBase.value);
        let value = inputValue.value.trim().toUpperCase();
        
        if (!value) {
            conversionResult.textContent = '-';
            conversionDetails.textContent = 'Enter a value to convert';
            return;
        }
        
        // Validate input
        const validation = validateNumber(value, base);
        if (!validation.valid) {
            markInvalid(inputValue, validation.message);
            conversionResult.textContent = 'Invalid';
            conversionDetails.innerHTML = `<div class="step error">${validation.message}</div>`;
            return;
        }
        
        clearInvalid(inputValue);
        
        try {
            // Convert to decimal first
            const decimalValue = convertToDecimal(value, base);
            
            // Convert to target base
            const result = convertFromDecimal(decimalValue, target);
            
            // Update outputs
            conversionResult.textContent = result;
            
            // Show detailed steps
            let steps = '';
            
            // Step 1: Convert to decimal
            steps += `<div class="step"><strong>Step 1: Convert (${value})<sub>${base}</sub> to decimal:</strong></div>`;
            steps += `<div class="calculation">${value.split('').map((digit, i, arr) => 
                `${digit} × ${base}<sup>${arr.length - 1 - i}</sup>`
            ).join(' + ')} = ${decimalValue}</div>`;
            
            // Step 2: Convert to target base
            steps += `<div class="step"><strong>Step 2: Convert ${decimalValue} to base ${target}:</strong></div>`;
            
            if (target === 1) {
                steps += `<div class="calculation">Base 1 (unary) representation: ${'1'.repeat(decimalValue)}</div>`;
            } else {
                let temp = decimalValue;
                const remainders = [];
                while (temp > 0) {
                    remainders.push(temp % target);
                    temp = Math.floor(temp / target);
                }
                
                if (remainders.length === 0) remainders.push(0);
                
                steps += `<div class="calculation">${decimalValue} ÷ ${target} = `;
                steps += remainders.reverse().join(' → ') + ` → (${result})<sub>${target}</sub></div>`;
            }
            
            conversionDetails.innerHTML = steps;
            
        } catch (e) {
            conversionResult.textContent = 'Error';
            conversionDetails.innerHTML = `<div class="step error">Conversion error: ${e.message}</div>`;
        }
    };
    
    // Event Listeners for Converter
    convertBtn.addEventListener('click', convertBase);
    
    // Calculator Functions
    const calculate = () => {
        const base = parseInt(calcBase.value);
        let val1 = num1.value.trim().toUpperCase();
        let val2 = num2.value.trim().toUpperCase();
        const op = operation.value;
        
        if (!val1 || !val2) {
            if (!val1) markInvalid(num1, 'First number cannot be empty');
            if (!val2) markInvalid(num2, 'Second number cannot be empty');
            return;
        }
        
        // Validate inputs
        const validation1 = validateNumber(val1, base);
        const validation2 = validateNumber(val2, base);
        
        if (!validation1.valid) {
            markInvalid(num1, validation1.message);
            calcResult.textContent = 'Error';
            calcDetails.innerHTML = `<div class="step error">${validation1.message}</div>`;
            return;
        }
        
        if (!validation2.valid) {
            markInvalid(num2, validation2.message);
            calcResult.textContent = 'Error';
            calcDetails.innerHTML = `<div class="step error">${validation2.message}</div>`;
            return;
        }
        
        clearInvalid(num1);
        clearInvalid(num2);
        
        try {
            // Convert to decimal
            const dec1 = convertToDecimal(val1, base);
            const dec2 = convertToDecimal(val2, base);
            
            if (isNaN(dec1) || isNaN(dec2)) {
                calcResult.textContent = 'Error';
                calcDetails.textContent = 'Conversion error';
                return;
            }
            
            // Perform operation
            let result, operationSymbol, steps = '';
            let operationName = '';
            
            switch (op) {
                case 'add':
                    result = dec1 + dec2;
                    operationSymbol = '+';
                    operationName = 'Addition';
                    break;
                case 'subtract':
                    result = dec1 - dec2;
                    operationSymbol = '-';
                    operationName = 'Subtraction';
                    break;
                case 'multiply':
                    result = dec1 * dec2;
                    operationSymbol = '×';
                    operationName = 'Multiplication';
                    break;
                case 'divide':
                    if (dec2 === 0) {
                        calcResult.textContent = 'Error';
                        calcDetails.innerHTML = `<div class="step error">Division by zero is undefined</div>`;
                        return;
                    }
                    result = dec1 / dec2;
                    operationSymbol = '÷';
                    operationName = 'Division';
                    break;
            }
            
            // For division, handle fractional results
            let resultStr;
            if (op === 'divide' && !Number.isInteger(result)) {
                // For fractional results, show as decimal
                resultStr = result.toString();
            } else {
                // Convert back to original base for integer results
                resultStr = convertFromDecimal(Math.floor(result), base);
            }
            
            // Show result
            calcResult.textContent = resultStr;
            
            // Build detailed steps
            steps += `<div class="step"><strong>Step 1: Convert to decimal</strong></div>`;
            steps += `<div class="calculation">(${val1})<sub>${base}</sub> = ${dec1}</div>`;
            steps += `<div class="calculation">(${val2})<sub>${base}</sub> = ${dec2}</div>`;
            
            steps += `<div class="step"><strong>Step 2: Perform ${operationName.toLowerCase()} in decimal</strong></div>`;
            steps += `<div class="calculation">${dec1} ${operationSymbol} ${dec2} = ${result}</div>`;
            
            if (op !== 'divide' || Number.isInteger(result)) {
                steps += `<div class="step"><strong>Step 3: Convert result back to base ${base}</strong></div>`;
                steps += `<div class="calculation">${result} = (${resultStr})<sub>${base}</sub></div>`;
            }
            
            calcDetails.innerHTML = steps;
            
        } catch (e) {
            calcResult.textContent = 'Error';
            calcDetails.innerHTML = `<div class="step error">Calculation error: ${e.message}</div>`;
        }
    };
    
    calculateBtn.addEventListener('click', calculate);
    
    // Base Finder Functions
    const parseEquation = (equation) => {
        // Extract all terms with bases
        const termRegex = /\(([0-9A-Z]+)\)(?:r|\d+)/g;
        const terms = [];
        let match;
        
        while ((match = termRegex.exec(equation)) !== null) {
            terms.push(match[1].toUpperCase());
        }
        
        // Extract operation symbols
        const operations = [];
        const opRegex = /([+\-×÷*\/=])/g;
        while ((match = opRegex.exec(equation)) !== null) {
            operations.push(match[1]);
        }
        
        return {
            terms,
            operations
        };
    };
    
    const findMinimumBase = (terms) => {
        let minBase = 2;
        for (const term of terms) {
            for (const digit of term) {
                const digitValue = parseInt(digit, 36);
                if (digitValue + 1 > minBase) {
                    minBase = digitValue + 1;
                }
            }
        }
        return minBase;
    };
    
    const solveBaseEquation = () => {
        const eq = equation.value.trim();
        if (!eq) {
            baseResult.textContent = 'Error';
            baseDetails.innerHTML = '<div class="step error">Please enter an equation</div>';
            return;
        }
        
        // Parse the equation
        const { terms } = parseEquation(eq);
        
        // Determine base range
        const autoMinBase = findMinimumBase(terms);
        const min = minBase.value ? parseInt(minBase.value) : autoMinBase;
        const max = maxBase.value ? parseInt(maxBase.value) : 36;
        
        // Validate base range
        if (min < 2 || min > 36) {
            baseResult.textContent = 'Error';
            baseDetails.innerHTML = '<div class="step error">Minimum base must be between 2 and 36</div>';
            return;
        }
        
        if (max < 2 || max > 36 || max < min) {
            baseResult.textContent = 'Error';
            baseDetails.innerHTML = '<div class="step error">Maximum base must be between 2-36 and >= minimum base</div>';
            return;
        }
        
        try {
            // Step 1: Convert each number to base 10
            let steps = '<div class="step"><strong>Step 1: Convert each number to base 10.</strong></div>';
            const decimalTerms = {};
            
            for (const term of terms) {
                if (!decimalTerms[term]) {
                    // Create a placeholder expression
                    const expression = term.split('').map((digit, i, arr) => 
                        `${digit}×r<sup>${arr.length - 1 - i}</sup>`
                    ).join(' + ');
                    
                    // Evaluate the expression for a symbolic 'r'
                    const decimalExpr = term.split('').map((digit, i, arr) => 
                        `${parseInt(digit, 36)}*r^${arr.length - 1 - i}`
                    ).join(' + ');
                    
                    decimalTerms[term] = {
                        expression,
                        decimalExpr
                    };
                    
                    steps += `<div>(${term})<sub>r</sub> = ${expression} = ${decimalExpr}</div>`;
                }
            }
            
            // Step 2: Set up the equation in base 10
            steps += '<div class="step"><strong>Step 2: Set up the equation in base 10.</strong></div>';
            
            // Replace terms with their decimal expressions
            let decimalEq = eq;
            for (const term in decimalTerms) {
                decimalEq = decimalEq.replace(new RegExp(`\\(${term}\\)r`, 'gi'), `(${decimalTerms[term].decimalExpr})`);
            }
            
            steps += `<div>${decimalEq.replace(/=/g, ' = ')}</div>`;
            
            // Step 3: Simplify both sides
            steps += '<div class="step"><strong>Step 3: Simplify both sides.</strong></div>';
            
            // For demonstration, we'll show a simplified example
            // In a real implementation, we'd do actual algebraic simplification
            const simplifiedEq = decimalEq
                .replace(/(\d+)\*r\^0/g, '$1')
                .replace(/1\*r\^(\d+)/g, 'r^$1')
                .replace(/\+/g, ' + ')
                .replace(/-/g, ' - ');
            
            steps += `<div>${simplifiedEq}</div>`;
            
            // Step 4: Solve
            steps += '<div class="step"><strong>Step 4: Solve</strong></div>';
            
            // Find valid bases
            const validBases = [];
            for (let base = min; base <= max; base++) {
                try {
                    // Create a safe equation for evaluation
                    const safeEq = eq.replace(/r/gi, base);
                    
                    // Evaluate the equation
                    if (evaluateEquation(safeEq, base)) {
                        validBases.push(base);
                    }
                } catch (e) {
                    // Skip invalid bases
                }
            }
            
            // Step 5: Apply base constraints
            steps += '<div class="step"><strong>Step 5: Apply base constraints</strong></div>';
            steps += `<div>In base r, all digits must be less than r.</div>`;
            steps += `<div>From the digits: ${getUniqueDigits(terms).join(', ')} — the largest digit is ${Math.max(...getDigitValues(terms))}, so: r > ${Math.max(...getDigitValues(terms))}</div>`;
            steps += `<div>Also, base must be an integer greater than 1: r ∈ ℕ and r > ${Math.max(...getDigitValues(terms))}</div>`;
            
            // Final answer
            steps += '<div class="step"><strong>✅ Final Answer:</strong></div>';
            
            if (validBases.length === 0) {
                baseResult.textContent = 'No solution';
                steps += '<div>No valid bases found that satisfy the equation.</div>';
            } else if (validBases.length === 1) {
                baseResult.textContent = validBases[0];
                steps += `<div>r = ${validBases[0]}</div>`;
            } else {
                // Check if it's all bases above a certain value
                const expectedBases = Array.from({length: max-minBase+1}, (_, i) => i + minBase);
                if (arraysEqual(validBases, expectedBases)) {
                    baseResult.textContent = `r > ${Math.max(...getDigitValues(terms))}`;
                    steps += `<div>r can be any integer such that r > ${Math.max(...getDigitValues(terms))}</div>`;
                } else {
                    baseResult.textContent = validBases.join(', ');
                    steps += `<div>r can be: ${validBases.join(', ')}</div>`;
                }
            }
            
            baseDetails.innerHTML = steps;
            
        } catch (e) {
            baseResult.textContent = 'Error';
            baseDetails.innerHTML = `<div class="step error">Error solving equation: ${e.message}</div>`;
        }
    };
    
    const getUniqueDigits = (terms) => {
        const digits = new Set();
        for (const term of terms) {
            for (const digit of term) {
                digits.add(digit);
            }
        }
        return Array.from(digits).sort();
    };
    
    const getDigitValues = (terms) => {
        const values = [];
        for (const term of terms) {
            for (const digit of term) {
                values.push(parseInt(digit, 36));
            }
        }
        return values;
    };
    
    const arraysEqual = (a, b) => {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };
    
    const evaluateEquation = (equation, base) => {
        try {
            // Replace all (X)r with decimal values
            const processed = equation.replace(/\(([0-9A-Z]+)\)(?:r|(\d+))/gi, (match, p1) => {
                return convertToDecimal(p1.toUpperCase(), base);
            });
            
            // Handle equals sign for equation solving
            if (processed.includes('=')) {
                const [left, right] = processed.split('=');
                return eval(left.trim()) === eval(right.trim());
            }
            
            // For single expressions, just evaluate
            return eval(processed);
        } catch (e) {
            return false;
        }
    };
    
    findBaseBtn.addEventListener('click', solveBaseEquation);
    
    // Initialize
    updateMainBases();
    setupMainBasesDetails();
    
    // Set up equation examples
    equation.addEventListener('focus', () => {
        if (!equation.value) {
            const examples = [
                "(12)r + (13)r = (25)r",
                "(101)r × (10)r = (1010)r",
                "(123)r = (53)10",
                "(12)r + (13)r = (30)r",
                "(1A)r + (2B)r = (45)r"
            ];
            equation.value = examples[Math.floor(Math.random() * examples.length)];
        }
    });
});
