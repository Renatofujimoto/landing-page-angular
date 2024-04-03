import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewletterResponse } from '../interfaces/newletter.interface';

@Injectable({
  providedIn: 'root',
})
export class NewletterService {
  private endpointUrl =
    'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<NewletterResponse> {
    const data = { name, email };

    return this.http.post<NewletterResponse>(this.endpointUrl, data);
  }
}
