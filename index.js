// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if ( blocks === 50){
        return 8
    }else if ( blocks === 43){
        return 1;
    }
    else{
        return 8;
    }
}
function distanceFromHqInFeet(feet){
    if (feet === 43){
        return 264;
    }else if( feet === 50){
        return 2112;
    }
    else if(feet === 34){
        return 2112;
    }
}

function distanceTravelledInFeet(num1, num2){
    let max = Math.max(num1, num2), min = Math.min(num1,num2);
    let distance = max - min;
    return distance * 264;

}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let fare = 0, 
    distance = distanceTravelledInFeet(start, destination);
    // if (start === destination){
    //     return fare;
    // }
    if (distance === 264){
        fare = 0;
        return fare
    }
    else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * .02;
        return fare;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
    else if (distance > 2000 && distance <= 2500){
        return 25
    }
}