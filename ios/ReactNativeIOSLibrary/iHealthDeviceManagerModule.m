//
//  iHealthDeviceManagerModule.m
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2016/11/23.
//  Copyright © 2016年 daiqingquan. All rights reserved.
//

#import "iHealthDeviceManagerModule.h"
#import "AMHeader.h"
#import "BPHeader.h"
#import "HSHeader.h"
#import "BGHeader.h"
#import "POHeader.h"
#import "ECGHeader.h"
#import "BGMacroFile.h"
#import "ECGMacroFile.h"
#import "THV3Macro.h"
#import "IHSDKCloudUser.h"
#import "ManageDeviceController.h"
#import "ScanDeviceController.h"
#import "ConnectDeviceController.h"
#import <MediaPlayer/MediaPlayer.h>

@implementation iHealthDeviceManagerModule

@synthesize bridge = _bridge;

#define FetchUserInfo @"com.rn.ihealth.dm.userinfo"

RCT_EXPORT_MODULE()

#pragma mark
#pragma mark - Init
-(id)init
{
    if (self=[super init])
    {
        
         [ScanDeviceController commandGetInstance];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:AM3Discover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:AM3ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:AM3DisConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:AM3SDiscover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:AM3SConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:AM3SDisConnectNoti object:nil];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:AM4Discover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:AM4ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:AM4DisConnectNoti object:nil];
        //BP3L
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:BP3LDiscover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:BP3LConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:BP3LDisConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:BP3LConnectFailed object:nil];
        //BP5
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:BP5ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:BP5DisConnectNoti object:nil];
        //BP7S
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:BP7SDiscover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:BP7SConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:BP7SDisConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:BP7SConnectFailed object:nil];
        
        //KN-550BT
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:KN550BTDiscover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:KN550BTConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:KN550BTDisConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:KN550BTConnectFailed object:nil];
        
        //BG5L
//        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:BG5LDiscover object:nil];
//        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:BG5LConnectNoti object:nil];
//        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:BG5LDisConnectNoti object:nil];
//        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnectFailed:) name:BG5LConnectFailed object:nil];
        
        //BG5
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:BG5ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:BG5DisConnectNoti object:nil];
        
        //BG1
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(bg1Discover:) name:kNotificationNameNeedAudioPermission object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(bg1Connect:) name:kNotificationNameAudioDeviceInsert object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceBG1Disconnect:) name:kNotificationNameBG1DidDisConnect object:nil];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:HS4Discover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:HS4ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:HS4DisConnectNoti object:nil];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:PO3Discover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:PO3ConnectNoti object:nil];
         [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:PO3DisConnectNoti object:nil];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:BP5ConnectNoti object:nil];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:BP5ConnectNoti object:nil];
        
        //THV3
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:THV3Discover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:THV3ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:THV3DisConnectNoti object:nil];
        //ECG3
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDiscover:) name:ECG3Discover object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:ECG3ConnectNoti object:nil];
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:ECG3DisConnectNoti object:nil];
        
        //ECG3USB
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceConnect:) name:ECGUSBConnectNoti object:nil];
        
        [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(deviceDisconnect:) name:ECGUSBDisConnectNoti object:nil];
       
        [AM3Controller shareIHAM3Controller];
        [AM3SController_V2 shareIHAM3SController];
        [AM4Controller shareIHAM4Controller];
        [BP3LController shareBP3LController];
        [BP5Controller shareBP5Controller];
        [BG5Controller shareIHBg5Controller];
        [ECG3Controller shareECG3Controller];
        [ECG3USBController shareECG3USBController];
        
        [THV3Controller sharedController];
        
    }
    return self;
}

#pragma mark
#pragma mark - Notification
-(void)deviceDiscover:(NSNotification*)info {
    
    NSLog(@"Native: device discover %@", info);
    
    NSDictionary* userInfo = [info userInfo];
    NSString* deviceName = userInfo[@"DeviceName"];
    NSString* serialNumber = userInfo[@"SerialNumber"];
    NSString* deviceId = userInfo[@"ID"];
    if(serialNumber.length > 0){
        NSDictionary* deviceInfo = [[NSDictionary alloc]init];
        if ([userInfo[@"DeviceName"] isEqualToString:@"BG5"]) {
            
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BG5"};
            
        }else if([userInfo[@"DeviceName"] isEqualToString:@"FDTH"]){
            
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BTM"};
        }
        else
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":[self constantsToExport][userInfo[@"DeviceName"]]};
        }
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
    }else if (deviceId.length > 0){
        NSDictionary* deviceInfo = @{@"mac":deviceId,@"type":[self constantsToExport][deviceName]};
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
    }
    
}

-(void)bg1Discover:(NSNotification*)info {
    
    
//    NSDictionary* deviceInfo = @{@"mac":@"",@"type":@"BG1"};
//    [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
    
}

-(void)bg1Connect:(NSNotification*)info {
    
    [[MPMusicPlayerController applicationMusicPlayer] setVolume:1.0f];
    NSDictionary* deviceInfo = @{@"mac":@"",@"type":@"BG1"};
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
    
    
//    NSDictionary* deviceInfo = @{@"mac":@"",@"type":@"BG1"};
//    [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
    
    BG1*myBG1=[[BG1Controller shareBG1Controller] getCurrentBG1Instance];
    
    [myBG1 commandBG1DeviceModel:@0 withDiscoverBlock:^{
        
    } withDiscoverBlock:^(NSDictionary *idpsDic) {
        
        bg1IdpsDic = [NSDictionary dictionaryWithDictionary:idpsDic];
        
    } withConnectBlock:^{
        
        NSString *bg1Mac = @"";
        if (bg1IdpsDic[@"SerialNumber"] != nil) {
            bg1Mac = bg1IdpsDic[@"SerialNumber"];
        }
        NSDictionary* deviceInfo = @{@"mac":bg1Mac,@"type":@"BG1"};
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
        
    } withErrorBlock:^(BG1Error errorID) {
        
        NSDictionary* deviceInfo = @{@"mac":@"",@"action":@"action_measure_error_for_bg1",@"action_measure_error_for_bg1":[NSNumber numberWithInt:errorID]};
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"event_notify_bg1" body:deviceInfo];
        
    }];
    
}

-(void)deviceConnect:(NSNotification*)info {
    
    NSDictionary* userInfo = [info userInfo];
    NSLog(@"连接成功：%@",userInfo);
    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
    if ([userInfo[@"DeviceName"] isEqualToString:@"BG5"]&&[userInfo[@"Type"] isEqual:@2])
    {
        deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BG5L"};
    }
    else if([userInfo[@"DeviceName"] isEqualToString:@"PO3M"])
    {
        deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"PO3"};
    }else if([userInfo[@"DeviceName"] isEqualToString:@"HS4S"])
    {
        deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"HS4"};
    }else if([userInfo[@"DeviceName"] isEqualToString:@"FDTH"])
    {
        deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BTM"};
    }
    else
    {
        deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":[self constantsToExport][userInfo[@"DeviceName"]]};
    }
    
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
}

-(void)deviceBG1Disconnect:(NSNotification*)info {
    
    NSDictionary* deviceInfo = @{@"mac":@"",@"type":@"BG1"};
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceDisconnect" body:deviceInfo];
}

-(void)deviceDisconnect:(NSNotification*)info {
    NSDictionary* userInfo = [info userInfo];
    
    if (userInfo[@"SerialNumber"]!=nil  && userInfo[@"DeviceName"]!=nil) {
        
        NSDictionary* deviceInfo = [[NSDictionary alloc]init];
        if ([userInfo[@"DeviceName"] isEqualToString:@"BG5"]&&[userInfo[@"Type"] isEqual:@2])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BG5L"};
        }else if([userInfo[@"DeviceName"] isEqualToString:@"HS4S"])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"HS4"};
        }else if([userInfo[@"DeviceName"] isEqualToString:@"PO3M"])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"PO3"};
            
        }else if([userInfo[@"DeviceName"] isEqualToString:@"FDTH"])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BTM"};
        }
        else
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":[self constantsToExport][userInfo[@"DeviceName"]]};
        }
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceDisconnect" body:deviceInfo];
    }
}

-(void)deviceConnectFailed:(NSNotification*)info {
    NSDictionary* userInfo = [info userInfo];
    if(userInfo[@"DeviceName"]!=nil && userInfo[@"Type"]!=nil){
    
        NSDictionary* deviceInfo = [[NSDictionary alloc]init];
        if ([userInfo[@"DeviceName"] isEqualToString:@"BG5"]&&[userInfo[@"Type"] isEqual:@2])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BG5L"};
            
        }else if([userInfo[@"DeviceName"] isEqualToString:@"HS4S"])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"HS4"};
            
        }else if([userInfo[@"DeviceName"] isEqualToString:@"PO3M"])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"PO3"};
            
        }else if([userInfo[@"DeviceName"] isEqualToString:@"FDTH"])
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":@"BTM"};
        }
        else
        {
            deviceInfo = @{@"mac":userInfo[@"SerialNumber"],@"type":[self constantsToExport][userInfo[@"DeviceName"]]};
        }
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceDisconnect" body:deviceInfo];
    
    }
    
}
#pragma mark
#pragma mark - constantsToExport

- (NSDictionary *)constantsToExport

{
    

    return @{
             @"AM3" : @"AM3",
             @"AM3S" :@"AM3S",
             @"AM4" :@"AM4",
             @"BP3L" :@"BP3L",
             @"BP7S" : @"BP7S",
             @"KN550" : @"KN-550BT",
             @"KN-550BT" : @"KN-550BT",
             @"HS4S" :@"HS4S",
             @"HS4" :@"HS4",
             @"BG5L": @"BG5L",
             @"PO3":@"PO3",
             @"BP5":@"BP5",
             @"BP7":@"BP7",
             @"BG1":@"BG1",
             @"BG5":@"BG5",
             @"HS6":@"HS6",
             @"ECG":@"ECG",
             @"ECGUSB":@"ECGUSB",
             @"BTM":@"BTM",
             @"Event_Scan_Device":@"ScanDevice",
             @"Event_Scan_Finish":@"ScanFinish",
             @"Event_Device_Connected":@"DeviceConnected",
             @"Event_Device_Connect_Failed":@"DeviceConnectFailed",
             @"Event_Device_Disconnect":@"DeviceDisconnect",
             @"Event_Authenticate_Result":@"Event_Authenticate_Result"
             };
};

#pragma mark
#pragma mark - Method

RCT_EXPORT_METHOD(startDiscovery:(nonnull NSString *)deviceType){
    
    
    if ([deviceType isEqualToString:@"BP5"] ||[deviceType isEqualToString:@"BG1"] ||[deviceType isEqualToString:@"BG5"] ||[deviceType isEqualToString:@"HS6"] || [deviceType isEqualToString:@"BP7"]) {
        
        if ([deviceType isEqualToString:@"BG1"]) {
            
            [[BG1Controller shareBG1Controller] initBGAudioModule];
            
        }else if ([deviceType isEqualToString:@"BP5"]) {
            
          NSArray*bp5array = [[BP5Controller shareBP5Controller] getAllCurrentBP5Instace];
            
            if (bp5array.count) {
                
                
                for (int i=0; i<bp5array.count; i++) {
                    
                    BP5*mybp5=[bp5array objectAtIndex:i];
                    
                    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
                    
                    deviceInfo = @{@"mac":mybp5.serialNumber,@"type":@"BP5"};
                    
                    [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
                }


            }
 
        }else if ([deviceType isEqualToString:@"BG5"]) {
            
            NSArray*bg5array = [[BG5Controller shareIHBg5Controller] getAllCurrentBG5Instace];
            
            if (bg5array.count) {
                
                
                for (int i=0; i<bg5array.count; i++) {
                    
                    BG5*mybg5=[bg5array objectAtIndex:i];
                    
                    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
                    
                    deviceInfo = @{@"mac":mybg5.serialNumber,@"type":@"BG5"};
                    
                    [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
                }
                
                
            }
            
        }else if ([deviceType isEqualToString:@"BP7"]) {
            
            NSArray*bp7array = [[BP7Controller shareBP7Controller] getAllCurrentBP7Instace];
            
            if (bp7array.count) {
                
                
                for (int i=0; i<bp7array.count; i++) {
                    
                    BP7*mybp7=[bp7array objectAtIndex:i];
                    
                    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
                    
                    deviceInfo = @{@"mac":mybp7.serialNumber,@"type":@"BP7"};
                    
                    [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanDevice" body:deviceInfo];
                }
                
                
            }
            
        }
        
        
    }else{
        if ([deviceType isEqualToString:@"AM3"]) {
            
            [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM3];

        }else if ([deviceType isEqualToString:@"AM3S"]){
            
             [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM3S];
        }else if ([deviceType isEqualToString:@"AM4"]){
            
             [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_AM4];
            
        }else if ([deviceType isEqualToString:@"BP3L"]){
            
             [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BP3L];
        }else if ([deviceType isEqualToString:@"BP7S"]){
            
             [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_BP7S];
        }else if ([deviceType isEqualToString:@"KN-550BT"]){
            
            [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_KN550BT];
        }else if ([deviceType isEqualToString:@"HS4S"] || [deviceType isEqualToString:@"HS4"]){
            
             [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS4];
        }else if ([deviceType isEqualToString:@"BG5L"]){
            
            
            
        }else if ([deviceType isEqualToString:@"PO3"]){
            
             [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PO3];
            
        }else if ([deviceType isEqualToString:@"BTM"]){
            
            [[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_THV3];
            
        }else{
        
        
        
        }
        
    }
    
   
    
    
    
}


RCT_EXPORT_METHOD(stopDiscovery){
    
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_AM3];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_AM3S];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_AM4];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_BP3L];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_BP5S];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_BP7S];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_CONTINUA_BP];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_KN550BT];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_PO3];
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_HS4];
    
    
    [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_ECG3];
    
     [[ScanDeviceController commandGetInstance] commandStopScanDeviceType:HealthDeviceType_BP5SRW];
    
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"ScanFinish" body:nil];
}

RCT_EXPORT_METHOD(connectDevice:(nonnull NSString *)mac type:(nonnull NSString *)deviceType){
    
    
    if ([deviceType isEqualToString:@"BP5"] ||[deviceType isEqualToString:@"BG1"] ||[deviceType isEqualToString:@"HS6"] || [deviceType isEqualToString:@"BP7"] || [deviceType isEqualToString:@"BG5"]) {
        
        NSMutableDictionary *idpsTempDic = [[NSMutableDictionary alloc]init];
        if ([deviceType isEqualToString:@"BG1"]) {
            
            BG1*myBG1=[[BG1Controller shareBG1Controller] getCurrentBG1Instance];
            
            [myBG1 commandBG1DeviceModel:@0 withDiscoverBlock:^{
                
            } withDiscoverBlock:^(NSDictionary *idpsDic) {
                
                 bg1IdpsDic = [NSDictionary dictionaryWithDictionary:idpsDic];
                
                NSString *bg1Mac = @"";
                if (bg1IdpsDic[@"SerialNumber"] != nil) {
                    bg1Mac = bg1IdpsDic[@"SerialNumber"];
                }
                NSDictionary*idpsDics=[[NSDictionary alloc] initWithObjectsAndKeys:[bg1IdpsDic valueForKey:@"FW"],@"FirmWare",[bg1IdpsDic valueForKey:@"HD"],@"HardWare",[bg1IdpsDic valueForKey:@"SerialNumber"],@"DeviceId",nil];
                NSDictionary* deviceInfo = @{@"mac":bg1Mac,@"type":@"BG1",@"description":@"Success.",@"connect_result_for_bg1":@0,@"idps":idpsDics};
                [self.bridge.eventDispatcher sendDeviceEventWithName:@"action_connect_result_for_bg1" body:deviceInfo];
                
            } withConnectBlock:^{
                
                NSString *bg1Mac = @"";
                if (bg1IdpsDic[@"SerialNumber"] != nil) {
                    bg1Mac = bg1IdpsDic[@"SerialNumber"];
                }
                NSDictionary* deviceInfo = @{@"mac":bg1Mac,@"type":@"BG1"};
                [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
                
            } withErrorBlock:^(BG1Error errorID) {
                
                NSString *bg1Mac = @"";
                if (bg1IdpsDic[@"SerialNumber"] != nil) {
                    bg1Mac = bg1IdpsDic[@"SerialNumber"];
                }
                NSString *descriptionStr = @"";
                
                switch (errorID) {
                    case BG1Error_LowBattery:
                        descriptionStr=@"Battery is low.";
                        break;
                    case BG1Error_ResultOutOfMeasurementRage:
                        descriptionStr=@"Glucose test result is out of the measurement range.";
                        break;
                    case BG1Error_UnvalidReferenceVoltage:
                        descriptionStr=@"2.5V reference voltage error, not normal measurement, please repeat the test.";
                        break;
                    case BG1Error_StripUsed:
                        descriptionStr=@"Strip is used or unknown moisture detected, discard the test strip and repeat the test with a new strip.";
                        break;
                    case BG1Error_CodeError:
                        descriptionStr=@"CODE value check error. This error need let user scan code and call the send code function again,no alert need to show.";
                        break;
                    case BG1Error_RoomTemperatureOutOfRange1:
                    case BG1Error_RoomTemperatureOutOfRange2:
                        descriptionStr=@"The environmental temperature is beyond normal range, place the meter at room temperature for at least 30 minutes, then repeat the test.";
                        break;
                    case BG1Error_ResultLow:
                        descriptionStr=@"Glucose test result is low.";
                        break;
                    case BG1Error_ResultHigh:
                        descriptionStr=@"Glucose test result is high.";
                        break;
                    case BG1Error_DisConnented:
                        descriptionStr=@"BG disConnented.";
                        break;
                    case BG1Error_SleepingMode:
                        descriptionStr=@"BG sleeping mode.";
                        break;
                    case BG1Error_ParameterError:
                        descriptionStr=@"Parameter input error.";
                        break;
                    default:
                         descriptionStr=@"BG unknown.";
                        break;
                }
                
                NSDictionary* deviceInfo = @{@"mac":bg1Mac,@"action":@"action_measure_error_for_bg1",@"action_measure_error_for_bg1":[NSNumber numberWithInt:errorID],@"description":descriptionStr};
                [self.bridge.eventDispatcher sendDeviceEventWithName:@"event_notify_bg1" body:deviceInfo];
                
            }];
            
           
        }else if ([deviceType isEqualToString:@"BP5"]) {
            
            NSArray*bp5array = [[BP5Controller shareBP5Controller] getAllCurrentBP5Instace];
            
            if (bp5array.count) {
                
                
                for (int i=0; i<bp5array.count; i++) {
                    
                    BP5*mybp5=[bp5array objectAtIndex:i];
                    
                    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
                    
                    deviceInfo = @{@"mac":mybp5.serialNumber,@"type":@"BP5"};
                    
                    [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
                }
                
                
            }
            
        }else if ([deviceType isEqualToString:@"BG5"]) {
            
            NSArray*bg5array = [[BG5Controller shareIHBg5Controller] getAllCurrentBG5Instace];
            
            if (bg5array.count) {
                
                
                for (int i=0; i<bg5array.count; i++) {
                    
                    BG5*mybg5=[bg5array objectAtIndex:i];
                    
                    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
                    
                    deviceInfo = @{@"mac":mybg5.serialNumber,@"type":@"BG5"};
                    
                    [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
                }
                
                
            }
            
        }else if ([deviceType isEqualToString:@"BP7"]) {
            
            NSArray*bp7array = [[BP7Controller shareBP7Controller] getAllCurrentBP7Instace];
            
            if (bp7array.count) {
                
                
                for (int i=0; i<bp7array.count; i++) {
                    
                    BP7*mybp7=[bp7array objectAtIndex:i];
                    
                    NSDictionary* deviceInfo = [[NSDictionary alloc]init];
                    
                    deviceInfo = @{@"mac":mybp7.serialNumber,@"type":@"BP7"};
                    
                    [self.bridge.eventDispatcher sendDeviceEventWithName:@"DeviceConnected" body:deviceInfo];
                }
                
                
            }
            
        }

        
    }else{
        if ([deviceType isEqualToString:@"AM3"]) {
            
            [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM3 andSerialNub:mac];
            
        }else if ([deviceType isEqualToString:@"AM3S"]){
            
            [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM3S andSerialNub:mac];
        }else if ([deviceType isEqualToString:@"AM4"]){
            
             [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_AM4 andSerialNub:mac];
            
        }else if ([deviceType isEqualToString:@"BP3L"]){
            
            [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BP3L andSerialNub:mac];
        }else if ([deviceType isEqualToString:@"BP7S"]){
            
             [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_BP7S andSerialNub:mac];
        }else if ([deviceType isEqualToString:@"KN-550BT"]){
            
            [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_KN550BT andSerialNub:mac];
        }else if ([deviceType isEqualToString:@"HS4S"] || [deviceType isEqualToString:@"HS4"]){
            
             [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_HS4 andSerialNub:mac];
        }else if ([deviceType isEqualToString:@"BG5L"]){
            
           
            
        }else if ([deviceType isEqualToString:@"PO3"]){
            
             [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PO3 andSerialNub:mac];
            
        }else if ([deviceType isEqualToString:@"BTM"]){
            
            [[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_THV3 andSerialNub:mac];
            
        }else{
            
            
            
        }
        
    }
    
}


RCT_EXPORT_METHOD(getDevicesIDPS:(nonnull NSString *)mac callback:(RCTResponseSenderBlock)callback){
    
    
//    {
//        BTFirmwareVersion = "1.0.4";
//        DeviceName = HS4S;
//        FirmwareVersion = "1.0.2";
//        HardwareVersion = "5.0.1";
//        ID = "97FB0E73-7CE7-4B27-A7CE-EB76E9770002";
//        Manufacture = iHealth;
//        ModelNumber = "HS4S 11070";
//        ProtocolString = "com.jiuan.BWSV01";
//        SerialNumber = 8CDE529FD9DA;
//        Type = 2;
//    }
//    
    // {"protocolstring":"com.jiuan.AMV12","accessoryname":"AM4","firmwareversion":"138","hardwareversion":"100","manufacture":"iHealth","serialnumber":"004D32079148","modenumber":"AM4 11070"}
    
    NSArray*deviceArray=[[ManageDeviceController commandGetInstance] commandGetAllConnectDeviceArray];
    
    if(deviceArray.count){
        
        for (int i=0; i<deviceArray.count; i++) {
            
            if ([mac isEqualToString:[[deviceArray objectAtIndex:i] valueForKey:@"SerialNumber"]]) {
                
                NSDictionary*deviceDic=[deviceArray objectAtIndex:i];
                
                NSMutableDictionary*dic=[[NSMutableDictionary alloc] init];
                
                [dic setObject:[deviceDic objectForKey:@"ProtocolString"] forKey:@"protocolstring"];
                
                [dic setObject:[deviceDic objectForKey:@"DeviceName"] forKey:@"accessoryname"];
                
                [dic setObject:[deviceDic objectForKey:@"FirmwareVersion"] forKey:@"firmwareversion"];
                
                [dic setObject:[deviceDic objectForKey:@"HardwareVersion"] forKey:@"hardwareversion"];
                
                if(![[deviceDic objectForKey:@"DeviceName"] isEqualToString:@"BP5"]){
                
                    [dic setObject:[deviceDic objectForKey:@"Manufacture"] forKey:@"manufacture"];
                }
                
                [dic setObject:[deviceDic objectForKey:@"SerialNumber"] forKey:@"serialNumber"];
                
                [dic setObject:[deviceDic objectForKey:@"ModelNumber"] forKey:@"modenumber"];
                
                
                callback(@[dic]);
                
            }
            
        }
        
    }else{
        
        
        
    }
    
    
    
}

RCT_EXPORT_METHOD(authenConfigureInfo:(NSString *)userID clientID:(NSString *)clientID clientSecret:(NSString *)clientSecret){
    
    HealthUser *currentUser = [[HealthUser alloc]init];
    currentUser.userAccount = userID;
    currentUser.clientID = clientID;
    currentUser.clientSecret = clientSecret;
    
    [[IHSDKCloudUser commandGetSDKUserInstance]commandSDKUserValidation:currentUser UserDeviceAccess:^(NSArray *DeviceAccessArray) {
        
    } UserValidationSuccess:^(UserAuthenResult result) {
        [self authenResult:result userID:userID clientID:clientID clientSecret:clientSecret];

    } UserValidationReturn:^(NSString *userID) {
        
    } DisposeErrorBlock:^(UserAuthenResult errorID) {
        if (errorID == UserAuthen_UserInvalidateRight) {
            [self authenResult:UserAuthen_LoginSuccess userID:userID clientID:clientID clientSecret:clientSecret];
        }else{
            [self authenResult:errorID userID:userID clientID:clientID clientSecret:clientSecret];
        }

    }];

}

- (void)authenResult:(UserAuthenResult)result userID:(NSString*)userID clientID:(NSString*)clientID clientSecret:(NSString*)clientSecret{
    if (result <= UserAuthen_TrySuccess) {
        NSArray* userInfo = @[userID,clientID,clientSecret];
        [[NSUserDefaults standardUserDefaults] setObject:userInfo forKey:FetchUserInfo];
    }else{
        [[NSUserDefaults standardUserDefaults] removeObjectForKey:FetchUserInfo];
    }
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"Event_Authenticate_Result" body:@{@"authen":@(result)}];
}

RCT_EXPORT_METHOD(authenAppSecret:(NSString *)appSecret){
    
    
    [[IHSDKCloudUser commandGetSDKUserInstance] commandSDKUserValidationWithAppSecret:appSecret UserValidationSuccess:^(UserAuthenResult result) {
        
        [self.bridge.eventDispatcher sendDeviceEventWithName:@"Event_Authenticate_Result" body:@{@"authen":@(result)}];
        
    } DisposeErrorBlock:^(UserAuthenResult errorID) {
        
    }];
    
}

+ (NSArray*)userInfos{
    NSArray* userInfos = [[NSUserDefaults standardUserDefaults] objectForKey:FetchUserInfo];
    if (userInfos.count == 3) {
        return userInfos;
    }else{
        return nil;
    }
}

+ (NSString*)autherizedUserID{
    return [[self userInfos] objectAtIndex:0];
}

+ (NSString*)autherizedClientID{
    return [[self userInfos] objectAtIndex:1];
}

+ (NSString*)autherizedClientSecret{
    return [[self userInfos] objectAtIndex:2];
}


@end
