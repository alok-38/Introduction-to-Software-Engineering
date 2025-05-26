while True:
    name = input("What is your name? ").strip()
    if name:
        print(f"Welcome, {name}!")
        break
    print("Please enter a valid name.")

