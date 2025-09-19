import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfVersion02Component } from './df-version02.component';

describe('DfVersion02Component', () => {
  let component: DfVersion02Component;
  let fixture: ComponentFixture<DfVersion02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DfVersion02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfVersion02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
