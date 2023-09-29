import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 

    });
    service = TestBed.inject(DataService);
    testingController=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be get all users', () => {
    service.getAllUsers().subscribe((users:any)=>{
      expect(users).toBeTruthy();
      expect(users.length).toBe(3)
      const secondUser=users.find((user:any)=> user.id===2)
      expect(secondUser?.name).toBe('Ram')
    })
    const mockreq=testingController.expectOne('api/users');
    expect(mockreq.request.method).toEqual('GET')
    mockreq.flush(Object.values(USERS))
  });

});
