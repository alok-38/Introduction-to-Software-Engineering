numbers_list = [54, 78, 2, -9, 0, 100, 45, 54, 78]

# Print even numbers
for number in numbers_list:
    if number % 2 == 0:
        print(f"Evens: {number}")

print("\nDoing something extra!")

# Calculate sum
sum_of_numbers = sum(numbers_list)
print(f"Sum = {sum_of_numbers}")

# Calculate average and round it
average = sum_of_numbers / len(numbers_list)
rounded_average = round(average)
print(f"Average = {average}")
print(f"Rounded average = {rounded_average}")

# Max, min, and median
print("\nDisplaying the max, min and the median:")
largest = max(numbers_list)
smallest = min(numbers_list)
print(f"Max = {largest}")
print(f"Min = {smallest}")

import statistics
median = statistics.median(numbers_list)
print(f"Here's the list again: {numbers_list}")
print(f"Median = {median}")

