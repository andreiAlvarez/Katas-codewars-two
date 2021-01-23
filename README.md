# Katas-codewars-two

// kata 1 

Magpies are my favourite birds
Baby ones even more so...
It is a little known fact^ that the black & white colours of baby magpies differ by at least one place and at most two places from the colours of the mother magpie.
So now you can work out if any two magpies may be related.
...and Quardle oodle ardle wardle doodle the magpies said
Kata Task
Given the colours of two magpies, determine if one is a possible child or grand-child of the other.
Notes
Each pair of birds being compared will have same number of colour areas
B = Black
W = White
Example
Given these three magpies
Magpie 1  BWBWBW
Magpie 2  BWBWBB
Magpie 3  WWWWBB
You can see:
Magpie 2 may be a child of Magpie 1 because there is only one difference
Magpie 3 may be child of Magpie 2 because there are two differences
So Magpie 3 may be a grand-child of Magpie 1
On the other hand, Magpie 3 cannot be a child of Magpie 1 because there are three differences
DM :-)

// kata 2

A friend of yours is developing an application for a hotel. You should write a function that returns all names of the people on a given floor. Every floor has 6 rooms, and all rooms are numbered in a consecutive way.
The function has the following signature:
function roomMates( rooms, floor ){}
The argument rooms holds all clients in an array, where the index (starts at 0) corresponds to the room-number (starts at 1) and holds the name of the client.
floor is an integer and denotes the floor whose names need to be returned. If the floor is empty, the function roomMates should return an empty Array.
rooms = [ "foo", "bar" ]
Means that foo (index 0) stays in room #1 of the 1st floor and bar (index 1) in room #2 of the 1st floor.
Empty rooms shouldn't be returned, so he can directly count the number of occupied rooms by looking at the length of the array.
You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
