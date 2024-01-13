#Return the number (count) of vowels in the given string.
#We will consider a, e, i, o, u as vowels for this Kata (but not y).
#The input string will only consist of lower case letters and/or spaces.

# My Solution

def get_count(sentence):
    vowels = 'aeiou'
    numVowels = 0 
    for i in sentence:
        if i in vowels:
            numVowels += 1
    return numVowels






# expanded and explained for later review:

def get_count(sentence):
    #create variable with vowels in a string
    vowels = 'aeiou'
    #Initialize a counter number of vowels
    numVowels = 0 
    #Create for loop to iterate over each char in the 'sentence' parameter
    for i in sentence:
        #Check if current char 'i' is a vowel
        if i in vowels:
            #If a vowel, increment the vowel counter by 1
            numVowels += 1
    #After loop, return the total count of vowels found in the sentence
    return numVowels
