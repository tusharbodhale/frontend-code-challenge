import { AdvertisementService} from './advertisement.service';
import { Observable} from 'rxjs/Rx';
import { resolve, reject } from 'q';

describe('AdvertisementService',()=>{
    let advertisementService:AdvertisementService;
    let mockHttp:any;
    
    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp',['get','map']);
        advertisementService = new AdvertisementService(mockHttp);
    })

    describe('getAdvertisements',()=>{

        // it("should return Promise",()=>{
        //     mockHttp.get.and.returnValue(Promise);
        //     expect(advertisementService.getAdvertisements()).toBe(Promise);
        // })

        it("should call http.get with the right URL",()=>{
            mockHttp.get.and.returnValue(Observable.of(false));
            advertisementService.getAdvertisements();
            expect(mockHttp.get).toHaveBeenCalledWith('https://api.mcmakler.de/v1/advertisements');
        })
    })
})