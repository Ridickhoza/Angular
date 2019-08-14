import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  ticket: Ticket = new Ticket();
  submitted = false;
 
 
  constructor(private ticketService: TicketService) { }


  ngOnInit() {
   
  }

  

updateTicket(id: number,ticket:object){

  this.ticketService.updateTicket(id,ticket)
  .subscribe(data => console.log(data), error => console.log(error));

}

}
