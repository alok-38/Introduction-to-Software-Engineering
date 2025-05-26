numbers = [5, 2, 9, 1, 7]

def smallest_number(numbers):
    smallest = numbers[0]
    for num in numbers:
        if num < smallest:
            smallest = num
    return smallest

# Ask the user for input
user_input = input("Enter numbers seperated by commas (e.g.5,2,9,1,7): ")

# Convert the string input to a list of integers
numbers = [int(num.strip()) for num in user_input.split(",")]

result = smallest_number(numbers)
print ("The smallest number is: ", result)

