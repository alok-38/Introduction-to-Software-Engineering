height = int(input("Height: "))  # Ask the user for input properly
for i in range(1, height + 1):   # Go from 1 to height (inclusive)
    print(" " * (height - i) + "*" * i)  # Adjust spacing based on height

