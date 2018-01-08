//
//  ECGModule.m
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2018/1/5.
//  Copyright © 2018年 daiqingquan. All rights reserved.
//

#import "ECGModule.h"

#import "ECGHeader.h"

#define ECGACTION @"action"
#define ECG_BATTERY @"BATTERY_ECG"


#define EVENT_NOTIFY @"event_notify_ecg"



@implementation ECGModule


@synthesize bridge = _bridge;


RCT_EXPORT_MODULE()


#pragma mark
#pragma mark - constantsToExport
- (NSDictionary *)constantsToExport
{
    return @{@"Event_Notify": EVENT_NOTIFY };
    
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

-(ECG3*)getECG3WithMac:(NSString*)mac{
    
    ECG3Controller *controller = [ECG3Controller shareECG3Controller];
    NSArray *ecgDeviceArray = [controller getAllCurrentECG3Instace];
    
    for(ECG3 *tempECG3 in ecgDeviceArray){
        if([mac isEqualToString:tempECG3.serialNumber]){
            
            return tempECG3;
            break;
        }
    }
    
    return nil;
}

#pragma mark
#pragma mark - Method

RCT_EXPORT_METHOD(getAllConnectedDevices){
    
    
    NSArray*ecg3array= [[ECG3Controller shareECG3Controller] getAllCurrentECG3Instace];
    
    NSMutableArray*deviceMacArray=[NSMutableArray array];
    
    for (int i=0; i<[ecg3array count]; i++) {
        
        ECG3*ecg3=[ecg3array objectAtIndex:i];
        
        [deviceMacArray addObject:ecg3.serialNumber];
        
    }
    
    NSDictionary* deviceInfo = @{@"devices":deviceMacArray};
    
    [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
    
    
}



RCT_EXPORT_METHOD(getBattery:(nonnull NSString *)mac){
    
    if ([self getECG3WithMac:mac]!=nil) {
        [[self getECG3WithMac:mac] commandECG3GetBatteryInfo:^(NSNumber *battery) {
            
            NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_BATTERY_ECG",ECG_BATTERY:battery};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withErrorBlock:^(ECG3ErrorID errorID) {
            
        }];
    }else{
        
        NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_ERROR_ECG",@"error_ecg":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    
}

RCT_EXPORT_METHOD(sysTime:(nonnull NSString *)mac){
    
    if ([self getECG3WithMac:mac]!=nil) {
        [[self getECG3WithMac:mac] commandECG3SyncTime:^(BOOL resetSuc) {
            
            NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_SYSTIME"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withErrorBlock:^(ECG3ErrorID errorID) {
            
        }];
    }else{
        
        NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_ERROR_ECG",@"error_ecg":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
    
}

RCT_EXPORT_METHOD(stopMeasure:(nonnull NSString *)mac){
    
    
    if ([self getECG3WithMac:mac]!=nil) {
        
        [[self getECG3WithMac:mac] commandECG3FinishMeasure:^(BOOL resetSuc) {
            
            NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_STOPMEASURE_ECG"};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withErrorBlock:^(ECG3ErrorID errorID) {
            
        }];
        
    }else{
        
        NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_ERROR_ECG",@"error_ecg":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
}


RCT_EXPORT_METHOD(startMeasure:(nonnull NSString *)mac){
    
    
    if ([self getECG3WithMac:mac]!=nil) {
        
        [[self getECG3WithMac:mac] commandECG3StartMeasure:^(BOOL resetSuc) {
            
        } withWaveData:^(NSArray *waveDataArray) {
            
            NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_MEASURE_ECG",@"ACTION_MEASURE_WAVEData":waveDataArray};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withPulseResult:^(NSDictionary *pulseDic) {
            
            NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_MEASURE_ECG",@"ACTION_MEASURE_ECGPulse":pulseDic};
            [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
            
        } withErrorBlock:^(ECG3ErrorID errorID) {
            
        }];
        
    }else{
        
        NSDictionary* deviceInfo = @{ECGACTION:@"ACTION_ERROR_ECG",@"error_ecg":@"disconnect"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:EVENT_NOTIFY body:deviceInfo];
        
    }
    
}


@end
