//
//  BPBV10Device.h
//  iHealthSDKStatic
//
//  Created by Realank on 2017/9/26.
//  Copyright © 2017年 ihealthSDK. All rights reserved.
//

#import "BPV24Device.h"
#import "BPAlertSettingModel.h"
#import "BPLoopMeasureSettingModel.h"

typedef void(^BlockAskAlertSetting)(NSArray<BPAlertSettingModel*>* alertSettings);
typedef void(^BlockAskSupportedAlert)(BOOL sysAlert,BOOL diaAlert,BOOL averagePressureAlert,BOOL heartRateAlert,BOOL pressureBeyondRangeAlert);
typedef void(^BlockAskIDString)(NSString* IDString);
typedef void(^BlockAskLoopMeasureScheme)(BPLoopMeasureSettingResultModel* scheme);

/**
 a subclass of BPBTLEDevice, which represent BP BTLE devices using BPBV10 protocol
 */
@interface BPBV10Device : BPV24Device

@end
