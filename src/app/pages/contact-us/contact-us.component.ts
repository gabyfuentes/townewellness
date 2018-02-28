import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as model from '../../models';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  contacts: AngularFirestoreCollection<model.Contact>
  
  constructor(private afs: AngularFirestore, private router: Router) { 
    this.contacts = afs.collection('contacts');
  }
  item: model.Contact = {
    id: '',
    name: '',
    phone: '',
    email: '',
    title: '',
    message: ''
  }

newContact(item: model.Contact){
  this.contacts.add(item).then(success => {
    alert('message was sent');
    this.router.navigate(['/home']) 
  })
}
  ngOnInit() {
  }

}
