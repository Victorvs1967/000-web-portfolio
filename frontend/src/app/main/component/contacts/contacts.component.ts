import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { faGithub, faLinkedinIn, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { Mail } from 'src/app/model/mail.model';
import { MailService } from 'src/app/service/mail.service';
import { PageService } from 'src/app/service/page.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    imports: [FaIconComponent, ReactiveFormsModule]
})
export class ContactsComponent {

  pageService = inject(PageService);
  mailService = inject(MailService);
  formBuilder = inject(UntypedFormBuilder);

  contactPage: any;

  locationDot = faLocationDot;
  envelope = faEnvelope;
  globe = faGlobe;
  github = faGithub;
  linkedinIn = faLinkedinIn;
  telegram = faTelegram;
  facebook = faFacebook;
  faCheckCircle = faCheckCircle;

  contactForm?: UntypedFormGroup;

  constructor() {
    this.pageService.getPage('contacts')
      .pipe(map(page => this.contactPage = page))
      .subscribe();

    this.contactForm = this.formBuilder.group({
      name: ['', [ Validators.required ]],
      mailTo: ['', [ Validators.email, Validators.required ]],
      subject: ['', [ Validators.required ]],
      message: ['', [ Validators.required ]],
    });
  }

  sendEmail() {
    const message: Mail = {
      emailTo: '',
      subject: this.contactForm?.value.subject,
      message: '<h2>'.concat(this.contactForm?.value.name, '</h2><p>', this.contactForm?.value.mailTo, '</p><br/><br/><p>', this.contactForm?.value.message, '</p>'),
    }
    this.mailService.sendMail(message).subscribe(() => this.contactForm?.reset());
  }


}
