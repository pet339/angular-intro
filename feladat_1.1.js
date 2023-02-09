var guestList = 
[
{ guestName: 'John Doe', country: 'England', numberOfGuests: 4, alreadyCheckedIn: true },
{ guestName: 'Jane Harmon', country: 'USA', numberOfGuests: 7, alreadyCheckedIn: true },
{ guestName: 'Sarah Johnson', country: 'England', numberOfGuests: 2, alreadyCheckedIn: true },
{ guestName: 'Hanna Kovács', country: 'Hungary', numberOfGuests: 4, alreadyCheckedIn: false },
{ guestName: 'Tim Olson', country: 'Sweden', numberOfGuests: 1, alreadyCheckedIn: true },
{ guestName: 'Robert Wegener', country: 'Deutschland', numberOfGuests: 4, alreadyCheckedIn: true },
{ guestName: 'Tom Hardy', country: 'England', numberOfGuests: 8, alreadyCheckedIn: false }
]

function hotelFilter(guestList, numberOfGuests, alreadyCheckedIn){
    var filteredList = [];
    guestList
    .filter((item) => item.alreadyCheckedIn == alreadyCheckedIn && item.numberOfGuests == numberOfGuests)
    .map((element) => filteredList.push(element.guestName) );
    return filteredList;
}
console.log(hotelFilter(guestList, 4, true));
console.log(hotelFilter(guestList, 4, false));
console.log(hotelFilter(guestList, 8, true));
console.log(hotelFilter(guestList, 8, false));