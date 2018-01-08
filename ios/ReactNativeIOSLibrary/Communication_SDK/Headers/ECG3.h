//
//  ECG3.h
//  iHealthDemoCode
//
//  Created by zhiwei jing on 16/7/12.
//  Copyright © 2016年 zhiwei jing. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ECGMacroFile.h"

/**
 ECG3
 */
@interface ECG3 : NSObject

@property (strong, nonatomic) NSString *currentUUID;
@property (strong, nonatomic) NSString *serialNumber;
@property (strong, nonatomic) NSString *firmwareVersion;



/**
 * Sync time
 * @param syncTimeBlock True: Success， False: Failed.
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3SyncTime:(DisposeECG3SyncTimeBlock)syncTimeBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;


/**
 * Start Measure
 * @param startMeasureBlock True: Success， False: Failed.
 * @param waveDataBlock waveData：ECGWaveData
 * @param pluseResultBlock pulseDic: @"isHaveHeart":Type-NSNumber Meaning- whether have heart; @"pulse":Type-NSNumberWithBool Meaning-measure pulse value only valid when isHaveHeart is true
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3StartMeasure:(DisposeECG3StartMeasureBlock)startMeasureBlock withWaveData:(DisposeECG3WaveDataBlock)waveDataBlock withPulseResult:(DisposeECG3PluseResultBlock)pluseResultBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;

/**
 * Finish Measure
 * @param finishMeasureBlock True: Success， False: Failed.
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3FinishMeasure:(DisposeECG3FinishMeasureBlock)finishMeasureBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;

/**
 * Get Battery
 * @param batteryBlock from 0～100.
 * @param errorBlock Communication error codes, see ECG3 error descriptions.
 */
-(void)commandECG3GetBatteryInfo:(DisposeECG3GetBatteryBlock)batteryBlock withErrorBlock:(DisposeECG3ErrorBlock)errorBlock;
@end
