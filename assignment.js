// 


// Kilometer To Meter codes.
function kilometerToMeter(kilometer){
    // This code is for when there is no value.
    if(kilometer == null){
        return 'Please give a value of distance.'
    }
    //This code is for when there is a negative value as quantity.
    if(kilometer < 0){
        return 'Distance cant be negative.';
    }
    else{
        meter = kilometer * 1000;
        return meter;
    }
}


// Budget Calculator Codes.
function budgetCalculator(watch, mobile, laptop){
    //This code is for when there is a negative value as quantity.
    if(watch < 0 || mobile < 0 || laptop < 0){
        return 'Quantity cant be negative';  
    }
    // This code is for when the value is a floating number.
    else if(watch !== Number.isInteger || mobile !== Number.isInteger|| laptop !== Number.isInteger){
        return 'Quantity can not be a floating number.';
    }
    //This code is for when there isnt all the value of quantity.
    else if(watch == null || mobile == null || laptop == null){
        return'Please give quantity for 3 of the devices.';  
    }
    else{
        var watchCost = watch * 50;
        var mobileCost = mobile * 100;
        var laptopCost = laptop * 500;
        var totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    }
}


// Hotel Cost codes.
function hotelCost(day){
    var cost = 0;
    // This code is for when there is no value given.
    if(day == null){
        return 'Please give a value of day.';
    }
    //This code is for when there is a negative value.
    else if(day < 0){
        return 'Value of days cant be negative.';
    }
    // This code is for when the value is a floating number.
    else if(day !== Number.isInteger){
        return 'Value of day can not be a floating number.';
    }
    else if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var costFirst = 10 * 100;
        var costSecond = (day - 10) * 80;
        cost = costFirst + costSecond;
    }
    else{
        var costFirst = 10 * 100;
        var costSecond = 10 * 80;
        var costThird = (day - 20) * 50;
        cost = costFirst + costSecond + costThird;
    }
    return cost;
}


// Mega Friend or longest name code.
function megaFriend(name){
    var longest = '';
    // This code is for when there is no value.
    if(name == null){
        return 'Please give some names.';
    }
    for (var i = 0; i < name.length; i++){
        if (name[i].length > longest.length){
            longest = name[i];
        }
    }
    return longest;
}