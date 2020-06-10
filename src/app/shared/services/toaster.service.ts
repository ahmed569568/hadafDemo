import { Toaster } from 'ngx-toast-notifications';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster: Toaster) {
  }

  showToast(config) {
    this.toaster.open(config);
  }
}