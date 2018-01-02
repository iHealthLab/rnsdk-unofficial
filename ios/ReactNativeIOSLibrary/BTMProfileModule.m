//
//  BTMProfileModule.m
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2016/12/4.
//  Copyright © 2016年 daiqingquan. All rights reserved.
//

#import "BTMProfileModule.h"

@implementation BTMProfileModule


RCT_EXPORT_MODULE()

#pragma mark
#pragma mark - constantsToExport


- (NSDictionary *)constantsToExport
{
    return @{
             @"ACTION_BTM_BATTERY":@"ACTION_BTM_BATTERY",
             @"BTM_BATTERY":BTM_BATTERY,
             @"ACTION_BTM_MEMORY":@"ACTION_BTM_MEMORY",
             @"ACTION_BTM_MEASURE":@"ACTION_BTM_MEASURE",
             @"ACTION_BTM_CALLBACK":@"ACTION_BTM_CALLBACK",
             @"ACTION_ERROR_BTM":@"ACTION_ERROR_BTM",
             @"MEMORY_COUNT":@"memory_count",
             @"BTM_TEMPERATURE_ARRAY":@"BTM_TEMPERATURE_ARRAY",
             @"BTM_TEMPERATURE_TARGET":@"btm_temperature_target",
             @"BTM_TEMPERATURE":@"btm_temperature",
             @"BTM_MEASURE_TIME":@"measure_time",
             @"ERROR_NUM_BTM":@"ERROR_NUM_BTM",
             @"ERROR_DESCRIPTION_BTM":@"ERROR_DESCRIPTION_BTM",
             };
};




@end
