def extract_vowels_and_consonents(sentence):
    vowels = []
    consonents = []
    vowel_set = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    vowel_count = 0
    consonent_count = 0

    for character in sentence:
        if character.isalpha():
            if character.lower() in vowel_set:
                vowels.append(character)
                vowel_count += 1
            else:
                consonents.append(character)
                consonent_count += 1

    return vowels, consonents, vowel_count, consonent_count


sentence = "Hello World!"
v, c, vowel_count, consonent_count = extract_vowels_and_consonents(sentence)

print("Vowels:", v)
print("Consonants:", c)
print(f"Number of vowels: {vowel_count}")
print(f"Number of consonants: {consonent_count}")

