import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {jsPDF} from  "jspdf";
(pdfMake as  any).vfs=pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})

export class PrintComponent {
  @ViewChild('content', { static: false }) el!: ElementRef;

generatePdf(){
  let pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      pdf.save('inscriptionProf.pdf');
    },
  });

}
}
