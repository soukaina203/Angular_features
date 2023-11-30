import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as  any).vfs=pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})

export class PrintComponent {
generatePdf(){
  let docDefinition={
    content:[
      'This is a sample pdf'
    ]
  };
  pdfMake.createPdf(docDefinition).open()
}
}
