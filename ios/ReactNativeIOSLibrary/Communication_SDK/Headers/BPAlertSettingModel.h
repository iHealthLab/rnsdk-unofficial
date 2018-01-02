//
//  BPAlertSettingModel.h
//  iHealthSDKStatic
//
//  Created by Realank on 2017/9/27.
//  Copyright © 2017年 ihealthSDK. All rights reserved.
//

#import <Foundation/Foundation.h>


/**
 ABPM Alert type

 - BPAlertSYS: SYS alert
 - BPAlertDIA: DIA alert
 - BPAlertAveragePressure: average pressure alert
 - BPAlertHeartRate: hear rate alert
 - BPAlertPressureBeyondRange: pressure beyond range alert
 */
typedef NS_ENUM(NSUInteger, BPAlertType) {
    BPAlertSYS = 0x01,
    BPAlertDIA = 0x02,
    BPAlertAveragePressure = 0x03,
    BPAlertHeartRate = 0x04,
    BPAlertPressureBeyondRange = 0x05
};


/**
 ABPM alert setting model
 */
@interface BPAlertSettingModel : NSObject

@property (nonatomic, assign, readonly) BPAlertType alertType;
@property (nonatomic, assign, readonly) BOOL soundAlert;
@property (nonatomic, assign, readonly) BOOL visionAlert;
@property (nonatomic, assign, readonly) BOOL viberateAlert;
@property (nonatomic, assign, readonly) uint16_t upperLimit;
@property (nonatomic, assign, readonly) uint16_t lowerLimit;


/**
 factory method to create a instance

 @param alertType alert type
 @param soundAlert is sound alert enabled
 @param visionAlert is vision alert enabled
 @param viberateAlert is viberateAlertEnabled
 @param upperLimit upper limit
 @param lowerLimit lower limit
 @return a alert setting model instance
 */
+ (instancetype) modelWithAlertType:(BPAlertType)alertType
                   isSoundAlertOpen:(BOOL)soundAlert
                  isVisionAlertOpen:(BOOL)visionAlert
                isViberateAlertOpen:(BOOL)viberateAlert
                         upperLimit:(uint16_t)upperLimit
                         lowerLimit:(uint16_t)lowerLimit;

+(instancetype) alloc __attribute__((unavailable("alloc not available, call sharedInstance instead")));
-(instancetype) init __attribute__((unavailable("init not available, call sharedInstance instead")));
+(instancetype) new __attribute__((unavailable("new not available, call sharedInstance instead")));


@end
