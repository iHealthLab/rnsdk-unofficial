//
//  BGDevice.h
//  iHealthDemoCode
//
//  Created by Realank on 2017/1/4.
//  Copyright © 2017年 zhiwei jing. All rights reserved.
//

#import <Foundation/Foundation.h>

/**
 Base class of BG
 */
@interface BGDevice : NSObject

/**
 UUID
 */
@property (strong, nonatomic) NSString *currentUUID;
/**
 serial number or mac
 */
@property (strong, nonatomic) NSString *serialNumber;
/**
 firmware version
 */
@property (strong, nonatomic) NSString *firmwareVersion;

@end
