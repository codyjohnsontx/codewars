# Complete the method that takes a boolean value and return a "Yes" string for true, 
# or a "No" string for false.

#Starter code
def bool_to_word(boolean):
    # TODO


#My Solution 
def bool_to_word(boolean):
    if (boolean == True):
        return "Yes"
    else:
        return "No"


#refactoring code to simplify
def bool_to_word(boolean):
    return "Yes" if boolean else "No"