import tkinter as tk
import random

# Generate random number
secret_number = random.randint(1, 10)
attempts = 0

def check_guess():
    global attempts
    guess = entry.get()

    try:
        guess = int(guess)
        attempts += 1

        if guess < secret_number:
            result_label.config(text="Too low! Try again.")
        elif guess > secret_number:
            result_label.config(text="Too high! Try again.")
        else:
            result_label.config(text=f"Correct! You guessed it in {attempts} attempts.")
            submit_button.config(state='disabled')
    except ValueError:
        result_label.config(text="Please enter a valid number.")

# GUI setup
window = tk.Tk()
window.title("Guess the Number")

tk.Label(window, text="I'm thinking of a number between 1 and 10.").pack(pady=10)
tk.Label(window, text="Enter your guess:").pack()

entry = tk.Entry(window)
entry.pack(pady=5)

submit_button = tk.Button(window, text="Submit Guess", command=check_guess)
submit_button.pack(pady=5)

result_label = tk.Label(window, text="", font=("Helvetica", 12), pady=10)
result_label.pack()

window.mainloop()

