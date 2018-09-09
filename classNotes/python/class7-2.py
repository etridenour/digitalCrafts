# class MyClass:
#       def SayHello():
#         print("Hello there!")

# MyClass.SayHello()


class Person:
  def greet (self):  #self points to object you are creating (ex. me, matt)
    print("Hello")
me = Person()
me.greet()

matt = Person()
matt.greet()



# class MyClass:
#     Greeting = " " # lcass variable, available to all objects
#     def __init__(self):
#       print("Upon Initialization: Hello!")
#     def instance_method(self): #creates space to be filled in, self has to be there to let it know what to reference
#       print("Hello {0}".format(self.Greeting))

#     def class_method():  # this is a class method because it doesn't have self
#       print("Hello {0}".format(self.Greeting))


# digitalCrafts = MyClass()
# flatIrons = MyClass()
# flatIrons.instance_method()

# MyClass.Greeting = 'Eric' #set global variable equal to greeting, can change the name and will change in output
# digitalCrafts.instance_method()

# utAustin = MyClass()
# utAustin.instance_method()

# # digitalCrafts.instance_method() #

# # MyClass.class_method() #calling a class method, this needs myClass before

# # test.class_method() 

# class Person:
#   GlobalPerson = "Zelda" # global variable
#   def __init__ (self, name):
#     self.name = name #set instance variable
#     print(name)
#   def greet (self, friend): # instance method
#     print("Hello {} and {} and {}".format(self.name, friend, self.GlobalPerson))

# matt = Person('Fisher')
# matt.greet("Travis")

# person1 = Person('Hussein')
# person1.greet("Skyler")

# Person.GlobalPerson = 'Eric'
# matt.greet('Travis')
# person1.greet('Skyler')


# class Person:
#   def __init__ (self, name): #constructor
#     self.name = name
#     self.count = 0
#   def greet (self):
#     self._greet()
#   def _greet (self):
#     self.count += 1
#     if self.count > 1:
#       print("Stop being so nice")
#       self.__reset_count()
#     else:
#       print("Hello", self.name)
#   def __reset_count(self):
#     self.count = 0

# matt = Person('Fisher')
# matt.greet()  #calling function 
# matt.greet()
# matt.greet()

# travis = Person('Ramos') #only prints hello ramos because it is it's own thing, even though went through same class
# travis.greet()

# class Animal:
#   def __init__ (self, name):
#     self.name = name
# class Dog (Animal): #what you inherit goes in (), in this case animal
#   def woof (self):
#     print("Woof")
# class Cat (Animal):
#   def meow (self):
#     print("Meow")


super().__init__(power, health)







