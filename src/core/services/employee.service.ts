import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    url = '/employee';

    constructor(private apiService: ApiService) {
    }

    get(): Observable<Employee[]> {
        return this.apiService.get(`${this.url}/search`)
            .pipe(map(data => data));
    }

}
