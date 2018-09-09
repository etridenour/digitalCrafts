#lists and length
myList = ["horse", "chicken", "goat"]
print(len(myList))
print(len(myList[1]))

#append
numbers = [1, 2, 3]
numbers.append(4)
print(numbers)

myList.append("dog") #adds dog to end of list
print(myList)

#list slicing
numbers = [1, 2, 3, 4, 5]
print(numbers[0:2]) #prints out that range - doesn't inlcude last element
print(numbers[0:4])

#insert - (element number, element)
myList.insert(2, "cat")
print(myList)

myList.insert(4, "hippo")
print(myList)

#pop - get's rid of last element of list
myl = myList.pop()
print(myList)

#index - returns item in list
print(myList[0])
print(myList[1])

#sort - figure this one out**
print(myList.sort())

#
my_string = "Hello"
print(my_string[0:2])

# add lists together - concatenate
myList = ["horse", "chicken", "goat"]
myList2 = ["dog", "cat", "hen"]
print(myList + myList2)

print(myList * 3)

# tuple - immutable list (cannot be changed)
# uses open parethesis and closed parenthesis
myList = ("horse", "chicken", "goat")

print(myList)
#if change is tried, will receive error - unchangeable
print(myList[2]) #prints index the same

#range() - typically not used by itself
rng = range(10)
print(rng)
rng2 = (10, 20) #10 - 19
rng3 = range(10, 20, 2) #range goes from 10-20, at steps of 2 - 10 12 14 16 ...

#for loops
names = ["George", "W", "Bush"] #goes through each element
for name in names:
    print(name)

name = "George W Bush" #goes through each character because not in brackets (array/list/tuple)
for character in name:
    print(character)

for number in range(0, 10):
    print(number)
print('----------')
for number1 in range(0, 10, 2):
    print(number1)
print('----------')
num = [1, 2, 3, 4, 5]
for n in num:
    print(n+1)
print('----------')
namess = ["Travis", "Bill", "Steve"]
for x in namess:
    print("Hello " + x)

myNewList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for c in range(0, 10, 2):
    print(myNewList[c])

names = ['bear', 'chicken', 'cat', 'bee', 'ant', 'fly', 'lion', 'tiger', 'snorlax', 'orca']
for animals in range(0, 10, 3):
    print(animals)
    print(names[animals])

#while loop
count = 0
while count < 10:
    count += 1
    print("The count is", count)
print("Done")

count = 0
while (count<=10):
    print("hello Matt")
    count = count + 1











