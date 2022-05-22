function fullname () {
    return this.firstName +" " + this.lastName;
}


const UserID = {
    firstName: "Fanri",
    lastName:"Ahmadi",
    DateOfBirth:Date("2020-12-12"),
    Gender : "Male",
    fullname : fullname 
};
console.log(UserID)
console.log(UserID.firstName)
console.log(UserID.fullname())
