//
//  HSProfileModule.m
//  ReactNativeIOSLibrary
//
//  Created by ihealth on 16/12/2.
//  Copyright © 2016年 daiqingquan. All rights reserved.
//

#import "HSProfileModule.h"

@implementation HSProfileModule

RCT_EXPORT_MODULE()

#pragma mark
#pragma mark - constantsToExport
@synthesize bridge = _bridge;

-(NSDictionary *)constantsToExport{
    return @{
             @"ACTION_LIVEDATA_HS" : ACTION_LIVEDATA_HS,
             @"LIVEDATA_HS" : LIVEDATA_HS,
             
             @"ACTION_ONLINE_RESULT_HS" : ACTION_ONLINE_RESULT_HS,
             @"DATAID" : DATAID,
             @"WEIGHT_HS" : WEIGHT_HS,
             @"FAT_HS" : FAT_HS,
             @"WATER_HS" : WATER_HS,
             @"MUSCLE_HS" : MUSCLE_HS,
             @"SKELETON_HS" : SKELETON_HS,
             @"FATELEVEL_HS" : FATELEVEL_HS,
             @"DCI_HS" : DCI_HS,
             
             
             @"ACTION_HISTORICAL_DATA_HS" : ACTION_HISTORICAL_DATA_HS,
             @"HISTORDATA__HS" :HISTORDATA__HS,
             @"MEASUREMENT_DATE_HS" : MEASUREMENT_DATE_HS,
             @"ACTION_HISTORICAL_DATA_COMPLETE_HS" :ACTION_HISTORICAL_DATA_COMPLETE_HS,
             @"ACTION_NO_HISTORICALDATA" : ACTION_NO_HISTORICALDATA,
             
             @"ACTION_ERROR_HS" : ACTION_ERROR_HS,
             @"ERROR_NUM_HS" : ERROR_NUM_HS,
             @"ERROR_ID_ILLEGAL_ARGUMENT" : ERROR_ID_ILLEGAL_ARGUMENT,
             @"ERROR_ID_WIFI_DISABLED" : ERROR_ID_WIFI_DISABLED,
             @"ERROR_DESCRIPTION_HS" : ERROR_DESCRIPTION_HS,
             
             
             
             };

}
@end
