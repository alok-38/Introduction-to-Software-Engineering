def bubbleSort(integers):
    n = len(integers)
    for i in range(n):
        swapped = False
        for j in range(n - 1 - i):
            if integers[j] > integers[j + 1]:
                # Swap
                integers[j], integers[j + 1] = integers[j + 1], integers[j]
                swapped = True
        if not swapped:
            break  # List is already sorted
    return integers

numbers_list = [-45, 45, 0, 500, 4, 79]
sorted_list = bubbleSort(numbers_list)
print(sorted_list)

