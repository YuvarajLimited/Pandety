import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
 
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  editprofile: FormGroup;
  isSubmitted = false;
  modules: any[];
  
    constructor(private fb: FormBuilder,
      private toast: ToastService,
      private router: Router,
      public loaderservice: LoaderService) { }
  
  ngOnInit() {
  this.loaderservice.showLoader();
  this.editprofile = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobile_num: ['', [Validators.required, Validators.minLength(10)]],
    age: ['', [Validators.required]],
    dob: ['', [Validators.required]]
   });
  this.getdetails()
  }

  getdetails() {
    this.editprofile.controls['firstname'].setValue('Yuvaraj'),
    this.editprofile.controls['lastname'].setValue('Ramesh'),
    this.editprofile.controls['email'].setValue('ryuvaraj982000@gmail.com'),
    this.editprofile.controls['mobile_num'].setValue('9176473319'),
    this.editprofile.controls['age'].setValue('22'),
    this.editprofile.controls['dob'].setValue('09/08/2000')
  }

  submitForm(){
  console.log("Submitform");
  this.isSubmitted = true;
  if (!this.editprofile.valid) {
  console.log('Please provide all the required values!')
  this.toast.dangerToast('Please provide all the required values!');
  } else {
  (
  res => {
  if(res == true)
  {
    this.toast.successToast('Successfully');
    this.isSubmitted = false;
    this.editprofile.reset();
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
  this.editprofile.reset()
}
}
      