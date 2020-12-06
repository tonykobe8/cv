import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  constructor() { }
reference =[{Name:'Nokwanda',sname:'Maranjane',tel:'+2783 555 1652',email:'nokwanda@mlab.co.za',position:'Facilitator'}];
reference1 =[{Name:'Molokomme M.A',sname:'',tel:'015 505 0439 / 082 784 6889',email:'',position:'Principal and WIL Montor'}];
  ngOnInit() {
  }

}