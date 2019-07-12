let house = ["Mansion", "Apartment", "Shack", "House", process.argv[2]]
let cars = ["a lambo", "a hot wheel","a bike", "a scooter", "nothing, you're too broke"]
function mash() {
    return "You will live in a " + getHome() + ",and you will have " + getChildrenCount() + " kids!";
}
console.log (mash());

function getHome() {
    var home = (Math.floor(Math.random()*house.length))
    return house[home];
}

function getChildrenCount() {
    let numberkid = Math.floor(Math.random()*Math.floor(100))
    if (Math.floor(Math.random()*Math.floor(100)) < 50){
        return numberkid;
    }
    else {
        return process.argv[3];
    }
}

function getCar() {
    var vroom = (Math.floor(Math.random()*cars.length))
    return cars[vroom];
}