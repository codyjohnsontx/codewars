# Trolls are attacking your comment section!
# A common way to deal with this situation is to remove all of the vowels 
# from the trolls' comments, neutralizing the threat.
# Your task is to write a function that takes a string and return a 
# new string with all vowels removed.
# For example, the string "This website is for losers LOL!" would become 
# "Ths wbst s fr lsrs LL!".
# Note: for this kata y isn't considered a vowel.


#My Solution

def disemvowel(string_):
    new_string = ''
    vowels = 'aeiouAEIOU'
    for char in string_:
        if char not in vowels:
            new_string += char
    return new_string


# Upon further research, this function uses string concatenation in a loop, 
# which is less memory-efficient for very large strings
# Time Complexity: O(n), where n is the length of the string.
# Space Complexity: O(n) for the new string.
# Due to the immutable nature of strings in Python, 
# Each concatenation creates a new string object.

# After some trial and error this is what I came up with for refactoring into more efficient 
# code, however it can be argued its harder to read

def disemvowel(string_):
    vowels = "aeiouAEIOU"
    new_string = ''.join([char for char in string_ if char not in vowels])
    return new_string

