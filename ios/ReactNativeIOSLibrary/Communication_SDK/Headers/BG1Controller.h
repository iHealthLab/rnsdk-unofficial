//
//  BG1Controller.h
//  iHealthBG
//
//  Created by xujianbo on 14-10-08.
//  Copyright (c) 2014年 andon. All rights reserved.
//

#import <Foundation/Foundation.h>
@class BG1;

/**
 BG1Controller
 */
@interface BG1Controller : NSObject


/**
 * Initialization for BG1Controller Instance.
 */
+(BG1Controller *)shareBG1Controller;

/**
 * Initialization for BG1 (connected BG via sound jack)
 * When the app detected headphone device, the notification with the name of kNotificationNameAudioDeviceInsert will be sent. After the device disconnected, the notification with the name of  kNotificationNameBG1DidDisConnect will be received.
 */
-(void)initBGAudioModule;

/**
 * Get current BG1 Instance
 * The methold needs to be called when the BG1 has been triggered.
 */
-(BG1 *)getCurrentBG1Instance;


/**
 * Stop audio module for BG1 (connected BG via sound jack)
 * Call this method When the app need stop BG1 communication.
 After call this method ,the app should set BG1 Disconnected status.
 */
-(void)stopBGAudioModule;




@end
