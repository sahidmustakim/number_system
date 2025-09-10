# Number System Pro - User Manual

## Table of Contents
1. [Introduction to Number Systems](#introduction-to-number-systems)
2. [Base Conversion](#base-conversion)
   - [Direct Conversion](#direct-conversion)
   - [Decimal as Intermediate](#decimal-as-intermediate)
   - [Horner's Method](#horners-method)
3. [Arithmetic in Different Bases](#arithmetic-in-different-bases)
   - [Addition](#addition)
   - [Subtraction](#subtraction)
   - [Multiplication](#multiplication)
   - [Division](#division)
4. [Base Finding Problems](#base-finding-problems)
   - [Digit Constraints](#digit-constraints)
   - [Equation Solving](#equation-solving)
   - [Common Pitfalls](#common-pitfalls)
5. [Advanced Topics](#advanced-topics)

## Introduction to Number Systems

A number system is a mathematical notation for representing numbers using digits or symbols. The base (or radix) of a number system determines the number of unique digits used, including zero.

### Common Number Systems

| Base | Name | Digits | Common Uses |
|------|------|--------|-------------|
| 2 | Binary | 0, 1 | Digital electronics, computer systems |
| 8 | Octal | 0-7 | Early computing systems, Unix permissions |
| 10 | Decimal | 0-9 | Everyday counting, mathematics |
| 16 | Hexadecimal | 0-9, A-F | Memory addresses, color codes |

## Base Conversion

### Direct Conversion
Used when bases are powers of each other (e.g., binary to octal).

**Example: Binary (base 2) to Octal (base 8)**
- Since 8 = 2³, group binary digits in sets of 3
- (101101)₂ = (101 101)₂ = (5 5)₈ = (55)₈

### Decimal as Intermediate
General method for converting between any bases.

**Example: (123)₅ to (?)₉**
1. Convert source to decimal:
   (123)₅ = 1×5² + 2×5¹ + 3×5⁰ = 25 + 10 + 3 = 38
2. Convert decimal to target base:
   38 ÷ 9 = 4 remainder 2 → (42)₉

### Horner's Method
Efficient method for large numbers.

**Example: (123)₅ →**
- Start with 0
- 0×5 + 1 = 1
- 1×5 + 2 = 7
- 7×5 + 3 = 38 (decimal)

## Arithmetic in Different Bases

### Addition
Carry over when sum equals or exceeds the base.

**Example (base 5):**
(3)₅ + (4)₅ = (12)₅ (since 3+4=7, which is 1×5 + 2)


### Subtraction
Borrowing works similarly, but you borrow the value of the base.

**Example (base 8):**
(12)₈ - (5)₈ = (5)₈ + remainder (5)₈

### Multiplication
Use base-specific multiplication tables.

**Example (base 4):**
(2)₄ × (3)₄ = (12)₄ (since 2×3=6, which is 1×4 + 2)

### Division
Similar to decimal division but with base-specific values.

**Example (base 5):**
(12)₅ ÷ (2)₅ = (3)₅ + remainder (1)₅
Because 2×3 = 6 = (11)₅, and 12 - 11 = 1

## Base Finding Problems

### Digit Constraints
The base must be greater than any digit used.

**Example:**
For (123)ᵣ, the digit '3' appears, so r must be > 3.
Minimum possible base is 4.

### Equation Solving
Convert all terms to decimal and solve for r.

**Example 1:**
Find r where (12)ᵣ + (13)ᵣ = (25)ᵣ

1. Convert to decimal:
   (1×r + 2) + (1×r + 3) = 2×r + 5
   
2. Simplify:
   2r + 5 = 2r + 5
   
3. This is true for any base > 5 (due to digit '5')

**Example 2:**
Find r where (12)ᵣ + (13)ᵣ = (30)ᵣ

1. Convert to decimal:
   (1×r + 2) + (1×r + 3) = 3×r + 0
   
2. Simplify:
   2r + 5 = 3r → r = 5
   
3. Verify:
   (12)₅ = 7, (13)₅ = 8, 7+8=15, and (30)₅ = 15 ✓

### Common Pitfalls

- **Digit constraints:** Base must be greater than any digit used
- **Multiple solutions:** Some equations may have multiple valid bases
- **No solution:** Some equations have no valid base (e.g., (12)r = (5)r)
- **Division:** Be careful with remainders in different bases
- **Leading zeros:** Generally not allowed in standard representations

## Advanced Topics

### Fractional Numbers
Different bases can represent fractions:

(0.1)₂ = 1×2⁻¹ = 0.5  
(0.1)₈ = 1×8⁻¹ = 0.125

### Negative Bases
Some systems use negative bases (e.g., base -2), though these are rare in practice.

### Non-Integer Bases
Mathematically, bases can be non-integers (e.g., base φ, the golden ratio), but these are mostly theoretical.
