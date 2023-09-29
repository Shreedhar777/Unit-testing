import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;
  let el:DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionComponent]
    });
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tested', () => {
    const pElement=el.queryAll(By.css('p'))
    expect(pElement[0].nativeElement.textContent).toBe('Hello World');
    component.title="Joke";
    fixture.detectChanges();
    const title=el.queryAll(By.css('.title'))
    expect(title[0].nativeElement.textContent).toBe('Joke');
  });
});
