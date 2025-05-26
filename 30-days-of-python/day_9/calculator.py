def calculator():
    try:
        operator = input("Enter the operator: (+, -, /, *)\n")
        num1 = float(input("Enter a number (including decimals): "))
        num2 = float(input("Enter another one (including decimals): "))
        print(f"You entered: {num1} & {num2}")

        if operator == '+':
            return num1 + num2
        elif operator == '-':
            return num1 - num2
        elif operator == '*':
            return num1 * num2
        elif operator == '/':
            if num2 == 0:
                print("Division by zero error!")
                return None
            else:
                return num1 / num2
        else:
            print("Invalid operator entered.")
            return None

    except ValueError:
        print("That was not a valid number.")
        return None

result = calculator()
if result is not None:
    print("Result:", result)

