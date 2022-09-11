import { Injectable } from '@angular/core';
import ClientModel from 'src/app/model/client/client.model';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public service: MainService;

  public async GetClients(): Promise<ClientModel[]> {
    return await this.service.HttpGet('/client.json');
  }
  constructor() {}
}
