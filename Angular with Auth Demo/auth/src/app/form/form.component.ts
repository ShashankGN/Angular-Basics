import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  submitted=false;
  registerForm:FormGroup=null!
  constructor(private fb:FormBuilder){

  }

ngOnInit(){
  this.registerForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:[''],
  },
  {
    validator:this.passwordMatchValidator
  }
  );


}

validateControl(input:string){
  return this.registerForm.get(input)?.invalid&&
  (this.registerForm.get(input)?.touched||
  this.registerForm.get(input)?.dirty);
}

validateControlError(input:string,errorType:string){
  return this.registerForm.get(input)?.hasError(errorType)&&
  (this.registerForm.get(input)?.touched||this.registerForm.get(input)?.dirty);
}

passwordMatchValidator(control:AbstractControl){
  const password:string=control.get('password')?.value;
  const confirmPassword:string=control.get('confirmPassword')?.value;
  if(password!==confirmPassword){
    control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    return null;
  }

}
OnSubmit(){
  // if(this.registerForm.valid)
  console.log(this.registerForm.value);
}


}
