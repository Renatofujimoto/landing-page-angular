import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewletterService } from '../../services/newletter.service';

@Component({
  selector: 'newletter-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnPrimaryComponent],
  templateUrl: './newletter-form.component.html',
  styleUrl: './newletter-form.component.scss',
})
export class NewletterFormComponent {
  newletterForm: FormGroup;
  loading = signal(false);

  constructor(private service: NewletterService) {
    this.newletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newletterForm.valid) {
      this.service
        .sendData(this.newletterForm.value.name, this.newletterForm.value.email)
        .subscribe();
      this.newletterForm.reset();
      this.loading.set(false);
    }
  }
}
