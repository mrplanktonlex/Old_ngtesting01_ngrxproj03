import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import{By} from '@angular/platform-browser';
import{DebugElement} from '@angular/core';
import {Child1Component} from './child1/child1.component' ;
import { AppComponent } from './app.component';

describe("test suite2", ()=>{
    // setup
    /*
      > beforeEach: TestBed.configureTestingModule({}).compileComponents();
      > it: TestBed.createComponent(AppComponent)
                .debugElement.componentInstance
    call configureTestingModule within a beforeEach,
     so that TestBed can reset itself to  a "base state" before each test runs
    */

    beforeEach(async(
      // 1st param is a callback
      () => {
        TestBed.configureTestingModule({
          declarations: [AppComponent, Child1Component]
        }).compileComponents();
      } //1st param ends
    ));

  //    it("spec 1.1.", async(()=> {
  // const x = TestBed.createComponent(AppComponent);
  //      //.debugElement.componentInstance;
  //   //   expect(x).toBeTruthy();
  // }));

  it('bat test', async(() => {
    expect('batman').toContain('bat');
  }));

  it("test spec2", ()=>{
    expect(true).toBe(true);
  });
});
