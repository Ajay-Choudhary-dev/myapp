import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordpatternComponent } from './passwordpattern.component';

describe('PasswordpatternComponent', () => {
  let component: PasswordpatternComponent;
  let fixture: ComponentFixture<PasswordpatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordpatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
