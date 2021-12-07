import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressStatistics } from '../models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AddressService {
    url = '/address';

    constructor(private apiService: ApiService) {
    }

    get(): Observable<AddressStatistics[]> {
        return this.apiService.get(`${this.url}/getAddressStatistics`)
            .pipe(map(data => data));
    }

}
