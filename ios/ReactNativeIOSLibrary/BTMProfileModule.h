//
//  BTMProfileModule.h
//  ReactNativeIOSLibrary
//
//  Created by daiqingquan on 2016/12/4.
//  Copyright © 2016年 daiqingquan. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTAssert.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif
@interface BTMProfileModule : NSObject<RCTBridgeModule>



#define BTMACTION @"event_notify_btm"
#define BTM_BATTERY @"battery_btm"



@end
