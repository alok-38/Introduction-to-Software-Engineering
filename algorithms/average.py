def add(nums):
    total = 0
    for index in nums:
        total += index
    return total 

def average(nums):
    count = len(nums)
    if count == 0:
        return None
    total = add(nums)
    return total / count

print(average([10, 20, 30]))   # Output: 20.0
print(average([]))            # Output: None

