import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('fullName', 'Tanhueco, Jean Kyle S.');
    fixture.componentRef.setInput('location', 'Angeles City, Pampanga');
    fixture.componentRef.setInput('email', 'test@example.com');
    fixture.componentRef.setInput('phone', '09XX XXX XXXX');
    fixture.componentRef.setInput('profile', 'Test profile.');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build initials from the first name', () => {
    expect(component.initials()).toBe('JK');
  });
});
