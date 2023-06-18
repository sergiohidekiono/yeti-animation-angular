import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Alarme Definido',
      detail: 'Não se preocupe, vou te lembrar!',
    });
  }

  showFailed() {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro ao criar Alarme',
      detail: 'Erro ao tentar criar um alarme!',
    });
  }

  showFileUpload(){
    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
