import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Restaurant } from './restaurant/restaurant.model'
import { MEAT_API } from '../app.api'
import 'rxjs/add/operator/map'


export class RestaurantsService{

    constructor(private http: Http){}
    
    restaurants(): Observable<Restaurant[]> {
       return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
    }

}