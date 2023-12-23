#Given a string, you have to return a string 
#in which each character (case-sensitive) is repeated once.
#  "String"      -> "SSttrriinngg"

#My Solution

def double_char(s):
    doubled_string = ""
    for character in s:
        doubled_string += character * 2
    return doubled_string