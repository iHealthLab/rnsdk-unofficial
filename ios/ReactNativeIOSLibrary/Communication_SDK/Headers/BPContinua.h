//
//  BPContinua.h
//  testShareCommunication
//
//  Created by zhiwei jing on 13-10-22.
//  Copyright (c) 2013年 my. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "UIKit/UIKit.h"
#import "BPDevice.h"

/**
 BPContinua device class
 */
@interface BPContinua : BPDevice


/**
 * Upload offline data.
 * @param  uploadDataArray	offline data set, including bp_unit,bp_timestampflag,bp_dia,bp_sys,bp_pulserate,bp_pulserateflag,bp_irregular,bp_hsdflag,bp_hsd,bp_timestamp,bp_userid,bp_useridflag,bp_pulseraterange,bp_cufffit,bp_improperPositionFlg,bp_map,bp_body_movement,bp_measurestatusflag,dataID.
 * @param error   error codes.
 * Specification:
 */
-(void)commandTransferMemoryDataWithDataArray:(BlockBachArray)uploadDataArray errorBlock:(BlockError)error;


/**
 * Set the userID of memery data that need to upload
 * @param userID  The userID of memery data that want to upload.The userID is either @1 or @2.
 * @param setResult  The result of setting userID,'YES'means success.
 * @param error   Error codes.
 */
-(void)commandSetUploadUserID:(NSNumber *)userID setUserIDBlock:(BlockSetUserID)setResult errorBlock:(BlockError)error;

/**
 * Synchronize time
 */
-(void)commandSynchronizeTime;

@end
