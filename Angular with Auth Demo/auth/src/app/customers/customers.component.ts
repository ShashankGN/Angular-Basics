import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    const token=localStorage.getItem('jwt');
    console.log(`The ${token}`);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    // this.http.get("http://localhost:5250/api/Customers")
    // this.http.get(`curl -H "Authorization: Bearer ${token}" http://localhost:5250/api/Customers`)
    this.http.get('http://localhost:5250/api/Customers', { headers })
    .subscribe(response=>{
      this.customers=response;
      console.log(response);
    },err=>{
      console.log(err);
    })
  }

}
