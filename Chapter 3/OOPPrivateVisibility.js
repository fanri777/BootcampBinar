class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address; 
    }
    #doGossip = () => {
        console.log('My address will become viral ${this.address}')
    }
    