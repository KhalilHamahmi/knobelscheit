export function wuerfelwurfeln() : number{
    return Math.floor(Math.random() * 6) + 1;

}

export function wuerfelwurfeln2() : number{
    return Math.floor(Math.random() * 6) + 1;

}

export function wuerfelnZusammen() : number{

    return wuerfelwurfeln() + wuerfelwurfeln2();

}


