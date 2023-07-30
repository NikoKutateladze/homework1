from turtle import*

#i want to paint a house:D

speed(50)
width(8)
begin_fill()
color("red")
forward (200)
left(90)

forward (200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#and there it is, i drew  a square 

#step 2: drawing doors




forward(70)
begin_fill()
color ("blue")
left(90)
forward (130)    #height of the door
right(90)
forward(60)
right(90)
forward (130)
end_fill()


#step 3:making the roof :)


penup ()
goto (200,200)
pendown()


color ("yellow")
begin_fill()
right(150)
forward (200)
left (120)
forward (200)
end_fill()


#step 4: making first window.


color("brown")

penup()
goto (190,170)
pendown()
right (60)
forward (40)
left (90)
forward (60)
left(90)
forward(40)
left (90)
forward(60)
left(90)
forward(20)
left(90)
forward(60)
left(180)
forward(30)
right(90)
forward(20)
left(180)
forward (40)

#step 5: making second window
color("brown")
penup()
goto(10,170)
pendown()
left (90)
forward (60)
left(90)
forward(40)
left (90)
forward(60)
left (90)
forward(40)
left(180)
forward(20)
right (90)
forward(60)
left (180)
forward(30)
left(90)
forward(20)
left(180)
forward(40)
exitonclick()