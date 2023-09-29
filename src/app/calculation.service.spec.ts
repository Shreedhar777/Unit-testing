import { TestBed } from "@angular/core/testing";
import { CalculationService } from "./calculation.service"
import { SharedService } from "./shared.service";
import { IntroductionComponent } from "./introduction/introduction.component";

describe("CalculationService",()=>{
  let shared: SharedService;
  let calc: CalculationService;
  beforeEach(()=>{
  // shared=new SharedService()
  // calc=new CalculationService(shared);
  shared=jasmine.createSpyObj('SharedService',['mysharedFunc'])
  TestBed.configureTestingModule({
    declarations:[IntroductionComponent],
    providers:[CalculationService,{provide:SharedService, useValue:shared}]
  }).compileComponents();
  shared=TestBed.inject(SharedService);
  calc=TestBed.inject(CalculationService) 


  })
  // it("should be multify two numbers",()=>{
  //   const shared=new SharedService();
  //   const calc=new CalculationService(shared);
  //   const result=calc.multify(2,3);
  //   expect(result).toBe(6);
  // })


  it("should call mysharedFunc ",()=>{
    // const shared=new SharedService();
    const shared=jasmine.createSpyObj('SharedService',['mysharedFunc'])
    const calc=new CalculationService(shared);
    // spyOn(shared,'mysharedFunc').and.callThrough();
    const result=calc.multify(2,3);
    expect(shared.mysharedFunc).toHaveBeenCalled();
  })
  })