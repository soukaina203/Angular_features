import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent {
  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
     this.userForm=this.formBuilder.group({
      fullName:['',Validators.required],
      to_name:['Admin',Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      subject: ['', Validators.required],
      message: ['', Validators.required]    })
  }
 async send(){
  emailjs.init('28EZJcAGrz_fbeeVn');
 let res= await  emailjs.send("service_2hbfxag","template_78r2hlj",{
    subject: this.userForm.value.subject,
    to_name: this.userForm.value.to_name,
    from_email:this.userForm.value.email,
    from_name: this.userForm.value.fullName,
    message: this.userForm.value.message,
    });
    alert('Message has been sended');
    this.userForm.reset()
}

}
