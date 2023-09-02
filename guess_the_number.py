import random

def user():
    userchoices=input('Choose The Number: 1,2,3,4,5')
    return int(userchoices)


def computer():
    choices=[1,2,3,4,5,]
    computerchoices=random.choice(choices)
    return computerchoices

def determine_winner(user,computer):
    if user == computer:
        print("You Won")
    else:
        print("You lost")
def winner():
    computerchoices=computer()
    userchoices=user()
    print(f"You chose:{userchoices} Computer chose:{computerchoices}")
    result=determine_winner(userchoices,computerchoices)
    print(result)

winner()




