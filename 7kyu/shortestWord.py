#Simple, given a string of words, return the length of the shortest word(s).
#String will never be empty and you do not need to account for different data types.


#My Solution

def find_short(s):
  s_list = s.split()
  starting_word = len(s_list[0])
  for word in s_list:
    if len(word) < starting_word:
      starting_word = len(word)
  return starting_word