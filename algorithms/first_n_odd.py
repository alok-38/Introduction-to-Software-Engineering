def square_by_addition(n):
    result = 0
    odd = 1
    for _ in range(n):
        result += odd
        odd += 2
    return result

print(square_by_addition(4))
