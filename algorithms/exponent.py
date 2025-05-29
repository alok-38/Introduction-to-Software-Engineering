def power(a, n):
    result = 1
    if n < 0:
        a = 1 / a # law of exponent
        n = -n
    for i in range(n):
        result *= a
    return result

print(power(3, 3))
print(power(3, 2))
print(power(3, -2))
