#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    difference = min_size - len(array)
    if min_size - len(array) > 0:
        while(min_size - len(array) > 0):
            add_padding(array, value)
            difference -= 1
    elif min_size - len(array) <= 0:
        return array
    return array

def add_padding(arr, val):
    arr.append(val)

print(pad([1,2,3], 5))
print(pad([1,2,3,4,5], 12, 'apple'))
print(pad([1,2,3], 3))
print(pad([1,2,3], 0))