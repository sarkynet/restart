import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restart';

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!!!', 'SUCCESSFUL');
  }
  showError() {
    this.toastr.error('Hello world!!!', 'ERROR');
  }
  showWarning() {
    this.toastr.warning('Hello world!!!', 'WARNING');
  }
  showInfo() {
    this.toastr.info('Hello world!!!', 'INFO');
  }
}
