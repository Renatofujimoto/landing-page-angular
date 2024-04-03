import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewletterFormComponent } from './newletter-form.component';

describe('NewletterFormComponent', () => {
  let component: NewletterFormComponent;
  let fixture: ComponentFixture<NewletterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewletterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
