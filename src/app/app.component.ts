import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }


}























//   bg:string=""

//   Tasks:string[]=['task1','task2','task3'];
//   deleteTask=(t:string)=>{
//     this.Tasks=this.Tasks.filter(e=>e!==t)
//   }
// userForm!:FormGroup;
// formBuilder=inject(FormBuilder);
// constructor() {
//   this.userForm=this.formBuilder.group({
//     name:['',Validators.required],
//     email:['',[Validators.required,Validators.email]],
//     address:this.formBuilder.group(
// {      street:['',Validators.required],
//         city:['',Validators.required]
// }
//     )
//   })
// }
// onColorChange=(bg:string)=>{
// this.bg=bg
// }
// submitForm=()=>{
//   console.log(this.userForm.controls)
// }

