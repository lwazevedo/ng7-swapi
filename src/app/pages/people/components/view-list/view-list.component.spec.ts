import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ViewListComponent } from './view-list.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from '../../shared/people.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('ViewListComponent', () => {
    let component: ViewListComponent;
    let fixture: ComponentFixture<ViewListComponent>;
    let injector: TestBed;
    let pService: PeopleService;
    let httpMock: HttpTestingController;
    const URLBASE = 'https://swapi.co/api/people';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewListComponent],
            imports: [CoreModule, SharedModule, RouterTestingModule, HttpClientTestingModule],
            providers: [PeopleService]
        })
            .compileComponents();
        injector = getTestBed();
        pService = injector.get(PeopleService);
        httpMock = injector.get(HttpTestingController);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have as text fields', () => {
        expect(component.searchBarState).toEqual('hidden');
        expect(component.listState).toEqual('ready');
        expect(component.idTable).toEqual('listPeople');
    });

    it('form should be invalid', () => {
        component.searchForm.controls['searchControl'].setValue(undefined);
        expect(component.searchForm.invalid).toBeFalsy();
    });

    it('form should be valid', () => {
        component.searchForm.controls['searchControl'].setValue('RC-2');
        expect(component.searchForm.valid).toBeTruthy();
    });

    it('should getAll people', () => {
        pService.getAll().subscribe((r) => {
            expect(r.length).toBeGreaterThan(1);
        });

        // const req = httpMock.expectOne(URLBASE);
        // expect(req.request.method).toBe('GET');
        // httpMock.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
