#Create a function with two arguments that will return an array of the first n multiples of x.
#Assume both the given number and the number of times to count will be positive numbers greater than 0.
#Return the results as an array or list ( depending on language ).
#Examples
#count_by(1,10) #should return [1,2,3,4,5,6,7,8,9]

#My solution
def count_by(number, number_of_times):
    result = []
    for i in range(1, number_of_times + 1):
        result.append(i * number)
    return result


#Code Breakdown
# - It takes two inputs: a 'number' and 'number_of_times'.
# - Starts off with a blank list named 'result'.
# - Runs a for loop from 1 to 'number_of_times'.
# - In the loop, it multiplies the 'number' by the loop counter 'i' and appends the result to the list 'result'.
# - Finally, it returns back the list filled with the multiples.
