class Hero:
    def __init__(self, power, health): # constructer initializes object
        self.power = power
        self.health = health
        print(power, health)

matt = Hero(10, 4)
