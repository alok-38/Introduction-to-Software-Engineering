def lost_forest_game():
    print("🌲 You are in the Lost Forest. 🌲")
    while True:
        choice = input("Do you go left or right? ").strip().lower()
        if choice == "left":
            print("🎉 You got out of the Lost Forest!")
            break
        elif choice == "right":
            print("🌲 You are still in the Lost Forest...")
        else:
            print("❓ That's not a valid direction. Try 'left' or 'right'.")

lost_forest_game()

