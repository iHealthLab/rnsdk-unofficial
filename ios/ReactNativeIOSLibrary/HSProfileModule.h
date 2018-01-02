//
//  HSProfileModule.h
//  ReactNativeIOSLibrary
//
//  Created by ihealth on 16/12/2.
//  Copyright © 2016年 daiqingquan. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTAssert.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

@interface HSProfileModule : NSObject<RCTBridgeModule>

#define ACTION_LIVEDATA_HS  @"liveData_hs"
#define LIVEDATA_HS  @"value"

#define ACTION_ONLINE_RESULT_HS  @"online_result_hs"
#define DATAID @"dataID"
#define WEIGHT_HS  @"value"
#define FAT_HS  @""
#define WATER_HS  @""
#define MUSCLE_HS  @""
#define SKELETON_HS  @""
#define FATELEVEL_HS  @""
#define DCI_HS  @""


#define ACTION_HISTORICAL_DATA_HS  @"historicaldata_hs"
#define HISTORDATA__HS  @"historyData"
#define MEASUREMENT_DATE_HS  @"date"
#define ACTION_HISTORICAL_DATA_COMPLETE_HS @"finishTranslate"
#define ACTION_NO_HISTORICALDATA  @"noHistoryData"

#define ACTION_ERROR_HS  @"error_hs"
#define ERROR_NUM_HS  @"error"
#define ERROR_ID_ILLEGAL_ARGUMENT  @"400"
#define ERROR_ID_WIFI_DISABLED  @""
#define ERROR_DESCRIPTION_HS @"description"


@end
