import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLenaComponent } from './about-lena.component';

describe('AboutLenaComponent', () => {
  let component: AboutLenaComponent;
  let fixture: ComponentFixture<AboutLenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutLenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
