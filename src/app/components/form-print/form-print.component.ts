import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-form-print',
  templateUrl: './form-print.component.html',
  styleUrls: ['./form-print.component.css'],
})
export class FormPrintComponent {
  myForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder) {
    this.myForm = new FormGroup({});
  }

  @ViewChild('content', { static: false }) el!: ElementRef;

  generatePdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('inscriptionProf.pdf');
      },
    });
  }
  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.myForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required]],
    });
  };
  handleSubmit = () => {
    console.log(this.myForm.value);
  };
}
