import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
    API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) {}

    getFormById(id){
        return this.httpClient.get(this.API_SERVER+"/form/"+id);
    }
}