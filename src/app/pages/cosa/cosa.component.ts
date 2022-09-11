import { Component, OnInit } from '@angular/core';
import ClientModel from 'src/app/model/client/client.model';
import { MainService } from 'src/app/services/api/main.service';

@Component({
  selector: 'app-cosa',
  templateUrl: './cosa.component.html',
  styleUrls: ['./cosa.component.scss'],
})
export class CosaComponent implements OnInit {
  public clients: ClientModel[];

  constructor(private service: MainService) {}
  async ngOnInit(): Promise<void> {
    this.clients = await this.service.client.GetClients();
  }
}
