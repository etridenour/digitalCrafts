
# def my_function():
#     print('hello world')
# # call function
# for x in range(0, 10):
#     my_function()

# def my_function(myName):
#     print('hello ' + myName)
# # call function
# my_function("Eric")

# result = 0
# pi = 3.14
# def circumference(radius):
#     result = 2 * pi * radius
#     return result

# a = circumference(3)
# b = circumference(23)

# print(a)
# print(b)

# result = 0
# pi = 3.14
# def circumference(radius, diameter, number):
#     result = 2 * pi * radius * diameter * number
#     return result

# print(circumference(1, 2, 3))

printed_hello = False

def display_hello():
    print('hello')
    printed_hello = True
    print('inside of function ' + str(display_hello))

print('before function gets called:' + str(printed_hello))

display_hello()

print('after function gets called:' + str(printed_hello))
# continues to give False because true is only true in the function itself







