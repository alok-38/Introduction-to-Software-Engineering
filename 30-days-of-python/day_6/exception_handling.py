try:
    result = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero.")
else:
    print("Division successful.")
finally:
    print("Done.")

