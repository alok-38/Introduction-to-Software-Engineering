# Define your list
numbers = [5, 2, 9, 1, 7]

# Create the algorithm
def find_largest(numbers):
    largest = numbers[0]
    # store the num in largest if you find one
    for num in numbers:
        if num > largest:
            largest = num
        return largest

# Run the function
result = find_largest(numbers)
print("The largest number is:", result)
