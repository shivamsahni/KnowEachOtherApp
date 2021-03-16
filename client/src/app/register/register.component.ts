import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(response=>{
      this.cancel();
    }, errors =>{
      console.log(errors);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
