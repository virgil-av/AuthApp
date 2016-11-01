import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt'
import {options} from "../auth.options";


declare var Auth0Lock: any;

@Injectable()
export class Auth {
  //configure Auth0
  lock = new Auth0Lock('5QY1n58EvpMXgxprL1IJ1sOlVooxMVDX','syrusstk.eu.auth0.com',options);

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      // get details about  the user profile
      this.lock.getProfile(authResult.idToken, function(error: any, profile: any){
        if(error){
          throw new Error(error)
        }

        // set profile
        localStorage.setItem('profile', JSON.stringify(profile));

        //set Token
        localStorage.setItem('id_token', authResult.idToken);


      })

    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token and info from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };
}
