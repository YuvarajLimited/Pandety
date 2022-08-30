import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  forgotpassword: FormGroup
  isSubmitted = false;
  modules: any[];


  constructor(private fb: FormBuilder,
              private toast: ToastService) { }

  ngOnInit() {
    this.forgotpassword = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  submitForm(){
    console.log("Submitform");
    this.isSubmitted = true;
    if (!this.forgotpassword.valid) {
      console.log('Please provide all the required values!')
      this.toast.dangerToast('Please provide all the required values!');
    } else {
       (
        res => {
          if(res == true)
          {
            this.toast.successToast('Successfully');
            this.isSubmitted = false;
            this.forgotpassword.reset();
            (
              () => {
                window.location.reload;
              }
            );
          }
          else{
            this.toast.dangerToast('Failed Please try again');
          }
        }
      );
    }
  }
  resetForm(){
    this.forgotpassword.reset()
  }
  
}
