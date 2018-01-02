//
//  BTMModule.m
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2016/12/4.
//  Copyright © 2016年 daiqingquan. All rights reserved.
//

#import "BTMModule.h"
#import "THV3.h"
#import "THV3Controller.h"
#import "BTMProfileModule.h"

@implementation BTMModule{


    NSMutableDictionary*resultDic;

}

#define EVENT_NOTIFY @"event_notify_po3"

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()


#pragma mark
#pragma mark - constantsToExport
- (NSDictionary *)constantsToExport
{
    return @{ @"Event_Notify": EVENT_NOTIFY };
    
}


#pragma mark
#pragma mark - Init
-(id)init
{
    if (self=[super init])
    {
        
        
    }
    return self;
}

-(THV3*)getTHV3WithMac:(NSString*)mac{
    
    THV3Controller *controller = [THV3Controller sharedController];
    NSArray *thvDeviceArray = [controller allCurrentInstance];
    
    for(THV3 *tempTHV3 in thvDeviceArray){
        if([mac isEqualToString:tempTHV3.serialNumber]){
            
            return tempTHV3;
            break;
        }
    }
    
    return nil;
}

#pragma mark
#pragma mark - Method

RCT_EXPORT_METHOD(getAllConnectedDevices){
    
    
    NSArray*thv3array= [[THV3Controller sharedController] allCurrentInstance];
    
    NSMutableArray*deviceMacArray=[NSMutableArray array];
    
    for (int i=0; i<[thv3array count]; i++) {
        
        THV3*thv3=[thv3array objectAtIndex:i];
        
        [deviceMacArray addObject:thv3.serialNumber];
        
    }
    
    NSDictionary* deviceInfo = @{@"devices":deviceMacArray};
    
    [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
    
    
}



RCT_EXPORT_METHOD(getBattery:(nonnull NSString *)mac){
    
    NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_BATTERY",BTM_BATTERY:@1};
    [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
    
}


RCT_EXPORT_METHOD(getMemoryData:(nonnull NSString *)mac){
    
    
    if ([self getTHV3WithMac:mac]!=nil) {
      
        [[self getTHV3WithMac:mac] readHistoryDataWithResultBlock:^(NSArray<THV3HistoryData *> *dataArray) {
            
           
            
            NSMutableArray * tempArr = [[NSMutableArray alloc]init];
            
            
            
            
            for (int i=0; i<dataArray.count; i++) {
                //将时间格式转化成字符串，适配plugin和react native
                NSDateFormatter *mydateFormatter = [[NSDateFormatter alloc] init];
                [mydateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
                NSString *dateStr = [mydateFormatter stringFromDate:[dataArray objectAtIndex:i].measureDate];
                
                NSDictionary *dic = @{@"measure_time":dateStr,@"btm_temperature":[NSNumber numberWithFloat:[dataArray objectAtIndex:i].temperature],@"btm_temperature_target":@0};
                
                [tempArr addObject:dic];
            }
            
            if (tempArr.count>0) {
                
                NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_MEMORY",@"BTM_TEMPERATURE_ARRAY":tempArr,@"memory_count":[NSNumber numberWithInt:tempArr.count]};
                [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            }
            
            
        }];
        

    }else{

        NSDictionary* deviceInfo = @{@"action":@"ACTION_ERROR_BTM",@"ERROR_DESCRIPTION_BTM":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];

    }
    
}

RCT_EXPORT_METHOD(setStandbyTime:(nonnull NSString *)mac :(nonnull NSNumber *)hour:(nonnull NSNumber *)min:(nonnull NSNumber *)sec){
    
    if ([self getTHV3WithMac:mac]!=nil) {
        
        [[self getTHV3WithMac:mac] configIdleTime:[[NSDate date]timeIntervalSince1970] withResultBlock:^(BOOL success) {
            
            NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_CALLBACK"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        }];
        
        
    }else{
        
        NSDictionary* deviceInfo = @{@"action":@"ACTION_ERROR_BTM",@"ERROR_DESCRIPTION_BTM":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    

    
    
}
RCT_EXPORT_METHOD(setTemperatureUnit:(nonnull NSString *)mac:(nonnull NSNumber *)unit){
    
    if ([self getTHV3WithMac:mac]!=nil) {
        
        [[self getTHV3WithMac:mac] configTemperUnit:unit withResultBlock:^(BOOL success) {
            
            NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_CALLBACK"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        }];
        
        
    }else{
        
        NSDictionary* deviceInfo = @{@"action":@"ACTION_ERROR_BTM",@"ERROR_DESCRIPTION_BTM":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    
    
}
RCT_EXPORT_METHOD(setMeasuringTarget:(nonnull NSString *)mac :(nonnull NSNumber *)target){
    
    if ([self getTHV3WithMac:mac]!=nil) {
        
        [[self getTHV3WithMac:mac] configMeasureTarget:target withResultBlock:^(BOOL success) {
            NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_CALLBACK"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        }];
        
        
    }else{
        
        NSDictionary* deviceInfo = @{@"action":@"ACTION_ERROR_BTM",@"ERROR_DESCRIPTION_BTM":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    
}
RCT_EXPORT_METHOD(setOfflineTarget:(nonnull NSString *)mac:(nonnull NSNumber *)target){
    
    if ([self getTHV3WithMac:mac]!=nil) {
        
        [[self getTHV3WithMac:mac] configOfflineMode:target withResultBlock:^(BOOL success) {
            
            NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_CALLBACK"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        }];
        
        
    }else{
        
        NSDictionary* deviceInfo = @{@"action":@"ACTION_ERROR_BTM",@"ERROR_DESCRIPTION_BTM":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
}

RCT_EXPORT_METHOD(disconnect:(nonnull NSString *)mac){
    
    
    
    
    if ([self getTHV3WithMac:mac]!=nil) {
        
        [[self getTHV3WithMac:mac] commandDisconnectDevice];
        
//        NSDictionary* deviceInfo = @{@"action":@"ACTION_BTM_CALLBACK"};
//        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }else{
        
        
        
    }
    
    
    
}





@end
