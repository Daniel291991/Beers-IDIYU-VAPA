import { Component, Input, Output, EventEmitter} from '@angular/core';
import { OrderDetails, BeersCompanyService } from '../../app/services/beers-company.service'

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  @Input() orderDetails: OrderDetails | null = null;
  @Input() subtotal: number = 0;
  @Input() descto: number = 0;
  @Input() total: number = 0;
  @Output() onClose = new EventEmitter<void>();
  paymentMethod: string = 'transferencia';
  showCancelPopup = false;
  showConfirmPopup = false;
   constructor (private beersCompanyService: BeersCompanyService) {}

  cancelAndClose() {
    this.showCancelPopup = true;
  }

  confirmCancel() {
    this.showCancelPopup = false;
    this.onClose.emit();
  }

  keepViewing() {
    this.showCancelPopup = false;
  }

  confirmAndClose() {
    this.showConfirmPopup = true;
    if (this.orderDetails) {
      this.beersCompanyService.sendOrder(this.orderDetails).subscribe(response => {
        if (response.success) {
            setTimeout(() => {
            this.showConfirmPopup = false;
            this.onClose.emit();
          }, 4000);
        }
      });
    } else {
      this.showConfirmPopup = false;
      this.onClose.emit();
    }
  }
}
