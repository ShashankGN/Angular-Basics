import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlJsBindingComponent } from './html-js-binding.component';

describe('HtmlJsBindingComponent', () => {
  let component: HtmlJsBindingComponent;
  let fixture: ComponentFixture<HtmlJsBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlJsBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlJsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
