import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfVersion01Component } from './df-version01.component';

describe('DfVersion01Component', () => {
  let component: DfVersion01Component;
  let fixture: ComponentFixture<DfVersion01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DfVersion01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfVersion01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
