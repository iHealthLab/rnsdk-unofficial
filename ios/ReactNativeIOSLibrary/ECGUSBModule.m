//
//  ECGUSBModule.m
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2018/1/5.
//  Copyright © 2018年 daiqingquan. All rights reserved.
//

#import "ECGUSBModule.h"

#import "ECGHeader.h"

#define ECGUSBACTION @"action"



#define EVENT_NOTIFY @"event_notify_ecgusb"

@implementation ECGUSBModule

@synthesize bridge = _bridge;


RCT_EXPORT_MODULE()


#pragma mark
#pragma mark - constantsToExport
- (NSDictionary *)constantsToExport
{
    return @{@"Event_Notify": EVENT_NOTIFY };
    
}

#pragma mark
#pragma mark - Method

RCT_EXPORT_METHOD(getAllConnectedDevices){
    
    
    ECG3USB*ecg=[[ECG3USBController shareECG3USBController] getAllCurrentECG3USBInstace];
    
    NSDictionary* deviceInfo = @{@"devices":ecg.serialNumber};
    
    [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
    
    
}

RCT_EXPORT_METHOD(syncData){
    
    if ([[ECG3USBController shareECG3USBController] getAllCurrentECG3USBInstace]!=nil) {
        [[[ECG3USBController shareECG3USBController] getAllCurrentECG3USBInstace] commandECG3SyncDataStart:^{
            
            NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_STARTSYNCDATA_ECGUSB"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
            
        } withDataInfo:^(NSDictionary *infoDic) {
            
            NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_SYNCDATAINFO_ECGUSB",@"DATAINFO":infoDic};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withFinishSync:^{
            
            NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_FINISHSYNCDATA_ECGUSB"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withSyncProgress:^(NSNumber *dataProgress) {
            
            NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_SYNCDATAPROGRESS_ECGUSB",@"PROGRESS":dataProgress};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withErrorBlock:^(ECG3ErrorID errorID) {
            
        }];
    }else{
        
        NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_ERROR_ECGUSB",@"error_ecgusb":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    
}

RCT_EXPORT_METHOD(deleteData){
    
    if ([[ECG3USBController shareECG3USBController] getAllCurrentECG3USBInstace]!=nil) {
        [[[ECG3USBController shareECG3USBController] getAllCurrentECG3USBInstace] commandECG3DeleteAllData:^{
            
            NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_DELETEDATA_ECGUSB"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withErrorBlock:^(ECG3ErrorID errorID) {
            
        }];
    }else{
        
        NSDictionary* deviceInfo = @{ECGUSBACTION:@"ACTION_ERROR_ECGUSB",@"error_ecgusb":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    
}




@end
