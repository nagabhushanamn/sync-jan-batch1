import { AbstractControl } from "@angular/forms";

export function myRatingValidator(min, max) {
    return function (c: AbstractControl): { [key: string]: boolean } | null {
        if (c.value >= min && c.value <= max)
            return null
        else
            return { rating: true }
    }
}


export function emailCompare(c: AbstractControl): { [key: string]: boolean } | null {
    let email = c.get('email').value;
    let confirmEmail = c.get('confirmEmail').value;
    if (email === confirmEmail) {
        return null;
    }
    else {
        return { match: true }
    }
}