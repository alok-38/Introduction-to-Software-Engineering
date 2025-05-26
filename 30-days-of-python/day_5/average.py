def average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

print(average([10, 20, 30]))  # Output: 20.0

