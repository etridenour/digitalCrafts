my_dictionary = {
    "Matt" : "Fisher",
    "Travis" : "Ramos",
    "Eric" : "Ridenour",
    0 : [0, 1, 2, 3, 4],
    "veronica": "M"
}       

# # result = my_dictionary["Matt"]
# # print(result)

# # result = my_dictionary.get("Matt")
# # print(result)

# result = "Matt1" in my_dictionary #it's not there
# print(result)

# result = "Matt" in my_dictionary #it's not there
# print(result)

# result = "Matt" in my_dictionary #it's not there
# print(type(result))

# #change values

# my_dictionary["Matt"] = "Smith"
# print(my_dictionary)

# #setting values

# keys = my_dictionary.keys()
# print(keys)

# values = my_dictionary.values()
# print(values)

# print(my_dictionary)

# del my_dictionary["veronica"]

# for key, value in my_dictionary.items():
#     print(key)
#     print(value)


# # nesting

# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# print(contact[0]['email'])
# print(contact[1]['email'])

# print(contact[0]['phone']['cell'])
# print(contact[1]['phone']['work'])

my_dictionary["newKeyName"] = 'hello world'
print(my_dictionary)




