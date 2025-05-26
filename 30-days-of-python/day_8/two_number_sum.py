def two_number_sum(numbers, target):
    seen = set()
    for num in numbers:
        needed = target - num
        if needed in seen:
            return (num, needed)
        seen.add(num)
    return None

numbers = [4, 7, 1, 9, 12, 3]
target = 10

result = two_number_sum(numbers, target)
if result:
    print(f"Two numbers that add up to {target} are: {result}")
else:
    print("No two numbers found that add up to the target.")
