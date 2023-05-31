import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formulario!: FormGroup;
  state: string = 'idle';
  isHandsUp: boolean = false;
  isLooking: boolean = false;
  isSuccess: any;
  lookAngle: number = 0;
  positionUser: number = 0;
  countError = 0;
  countSuccess = 0;

  constructor(private formBuilder: FormBuilder) {}
  @ViewChild('triggerSuccess', { static: false }) triggerSuccess: any;
  @ViewChild('triggerSuccessVariant', { static: false })
  triggerSuccessVariant: any;
  @ViewChild('triggerFailOnce', { static: false }) triggerFailOnce: any;
  @ViewChild('triggerFailTwice', { static: false }) triggerFailTwice: any;
  @ViewChild('triggerFailThird', { static: false }) triggerFailThird: any;
  @ViewChild('meuInput', { static: true })
  meuInput!: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.state = 'idle';
    this.isSuccess = 'checked';
  }
  enviarFormulario() {
    this.countError += 1;
    if (this.formulario.invalid) {
      if (this.countError == 1) {
        this.triggerFailOnce.fire();
      } else if (this.countError == 2) {
        this.triggerFailTwice.fire();
      } else {
        this.triggerFailThird.fire();
      }
      return;
    } else {
      this.countSuccess += 1;
      if (this.countSuccess == 1) {
        this.triggerSuccess.fire();
      } else {
        this.triggerSuccessVariant.fire();
        this.countSuccess = 0;
      }
      this.countError = 0;
    }
  }

  verificarEspacoOcupado() {
    const inputElement = this.meuInput.nativeElement;
    const textoDigitado = inputElement.value;
    const larguraInput = inputElement.offsetWidth;
    const larguraTexto = this.obterLarguraTexto(textoDigitado);
    const espacoOcupado = (larguraTexto / larguraInput) * 100;

    this.positionUser = espacoOcupado;
    this.lookAngle = espacoOcupado;
  }

  obterLarguraTexto(texto: string): number {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      return 0;
    }
    context.font = getComputedStyle(this.meuInput.nativeElement).font;
    return context.measureText(texto).width;
  }

  focusEmail() {
    this.isLooking = true;
    this.lookAngle = this.positionUser;
  }

  nonfocusEmail() {
    this.isLooking = false;
    this.lookAngle = 0;
  }

  focusPassword() {
    this.isHandsUp = true;
  }

  nonfocusPassword() {
    this.isHandsUp = false;
  }
}
