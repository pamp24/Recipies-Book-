import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData { 
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient){}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDI1Pa4sBdWx0TXqXHzsgOuV2m7bwj3Si8',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
        );
    }
}