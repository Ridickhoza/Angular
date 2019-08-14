import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from './../ticket';
import { TicketService } from '../ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor(private ticketService: TicketService, private listComponent: TicketListComponent) { }

  ngOnInit() {
  }

}
