import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent {
constructor(private translate:TranslateService) {
  this.translate.setDefaultLang("ar")
}
switchLanguage(Language:string){
  this.translate.use(Language)
}
}
