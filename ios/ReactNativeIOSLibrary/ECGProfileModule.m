//
//  ECGProfileModule.m
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2018/1/5.
//  Copyright © 2018年 daiqingquan. All rights reserved.
//

#import "ECGProfileModule.h"

@implementation ECGProfileModule


RCT_EXPORT_MODULE()

#pragma mark
#pragma mark - constantsToExport


- (NSDictionary *)constantsToExport
{
    return @{
             @"ACTION_BATTERY_ECG":@"ACTION_BATTERY_ECG",
             @"BATTERY_ECG":@"BATTERY_ECG",
             @"ACTION_SYSTIME":@"ACTION_SYSTIME",
             @"ACTION_MEASURE_ECG":@"ACTION_MEASURE_ECG",
             @"ACTION_MEASURE_WAVEData":@"ACTION_MEASURE_WAVEData",
             @"ACTION_MEASURE_ECGPulse":@"ACTION_MEASURE_ECGPulse",
             @"ACTION_STOPMEASURE_ECG":@"ACTION_STOPMEASURE_ECG",
             @"ACTION_ERROR_ECG":@"ACTION_ERROR_ECG",
             @"ERROR_NUM_ECG":@"ERROR_NUM_ECG",
             @"ERROR_DESCRIPTION_ECG":@"ERROR_DESCRIPTION_ECG",
             
             @"ACTION_SYNCDATA_ECGUSB":@"ACTION_SYNCDATA_ECGUSB",
             
             @"ACTION_STARTSYNCDATA_ECGUSB":@"ACTION_STARTSYNCDATA_ECGUSB",
             
             @"ACTION_SYNCDATAINFO_ECGUSB":@"ACTION_SYNCDATAINFO_ECGUSB",
             
             @"DATAINFO":@"DATAINFO",
             
             @"ACTION_FINISHSYNCDATA_ECGUSB":@"ACTION_FINISHSYNCDATA_ECGUSB",
             
             @"ACTION_SYNCDATAPROGRESS_ECGUSB":@"ACTION_SYNCDATAPROGRESS_ECGUSB",
             
             @"PROGRESS":@"PROGRESS",
             
             @"ACTION_DELETEDATA_ECGUSB":@"ACTION_DELETEDATA_ECGUSB",
             };
};

@end
