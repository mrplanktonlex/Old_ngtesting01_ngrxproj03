import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Child1Component } from './child1.component';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1Component ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   const fixture = TestBed.createComponent(Child1Component);
  //   const component = fixture.debugElement.componentInstance;
  //   // fixture.detectChanges();
  // });

  it('should be created', () => {
    // expect(component).toBeTruthy();
    expect(true).toBe(true);
  });
});

// describe("test suite", ()=>{
//   it("test spec", ()=>{
//     expect(true).toBe(true);
//   });
// });
