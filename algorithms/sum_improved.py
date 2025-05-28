def add_numbers(*args):
    total = 0
    for num in args:
        if not isinstance(num, (int, float)):
            raise TypeError(f"All arguments must be numbers. Invalid argument: {num}")
        total += num
    return total


print(add_numbers(1, 2, 3.5))      # Output: 6.5
print(add_numbers(10, -2, 8))      # Output: 16
print(add_numbers())              # Output: 0
print(add_numbers(1, 'a', 3))     # Raises TypeError

