import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WebWorkerService } from './services/web-worker.service';



describe('AppComponent', () => {

  let webWorkersServiceSpy;
  let mockWebWorkerService;

  beforeEach(() => {

    mockWebWorkerService = new WebWorkerService();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        // WebWorkerService
        { provide: WebWorkerService, useValue: mockWebWorkerService }
      ]
    });

    TestBed.overrideComponent(AppComponent, {
      set: {
        template: '<div>Override Template</div>'
      }
    });

    webWorkersServiceSpy = spyOn(mockWebWorkerService, 'initialize');

    TestBed.compileComponents();
  });

  afterEach(() => {
    webWorkersServiceSpy = null;
    mockWebWorkerService = null;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(mockWebWorkerService.initialize).toHaveBeenCalled();
  }));

});
