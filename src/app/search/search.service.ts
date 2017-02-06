import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';
import {Observable} from 'rxjs';
import {toJson} from '../helpers/helpers';

@Injectable()
export class SearchService {
    private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';
    constructor(private http: Http) {
        
    }

    searchBook(search:string): Observable<any> {
        return this.http.get(`${this.API_PATH}?q=${search}`)
        .retry(3)
        .map(toJson);
    }
}

