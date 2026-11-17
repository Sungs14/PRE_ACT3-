import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('skills', ['HTML and CSS', 'JavaScript']);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit and highlight the clicked skill', async () => {
    const emitted: string[] = [];
    component.skillSelected.subscribe((skill) => emitted.push(skill));

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    await fixture.whenStable();

    expect(emitted).toEqual(['HTML and CSS']);
    expect(button.classList).toContain('selected');
  });
});
