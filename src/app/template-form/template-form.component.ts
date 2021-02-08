import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  submitted = false;

  public usuario: any = {
    nome: null,
    email: null
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(this.usuario);
    this.submitted = true;
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
