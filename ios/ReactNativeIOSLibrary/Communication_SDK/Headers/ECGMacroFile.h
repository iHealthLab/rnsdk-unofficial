//
//  ECGMacroFile.h
//  iHealthDemoCode
//
//  Created by zhiwei jing on 16/7/12.
//  Copyright © 2016年 zhiwei jing. All rights reserved.
//

#import "HealthUser.h"

#ifndef ECGMacroFile_h
#define ECGMacroFile_h


#define ECGUSBConnectNoti @"ECGUSBConnect"
#define ECGUSBDisConnectNoti @"ECGUSBDisConnectNoti"
#define ECGSDKECGRightApi  @"OpenApiECG"
#define ECG3Discover         @"ECG3Discover"
#define ECG3ConnectFailed    @"ECG3ConnectFailed"
#define ECG3ConnectNoti @"ECG3ConnectNoti"
#define ECG3DisConnectNoti @"ECG3DisConnectNoti"
#define ECG3DeviceID @"ID"


/**
 ECGUSBDataTransmissionTag
 */
typedef NS_ENUM(NSUInteger, ECGUSBDataTransmissionTag) {
    /// Restore
    ECGUSBDataTransmissionTag_Restore = 0,
    /// Pause
    ECGUSBDataTransmissionTag_Pause
};


/**
 ECG3ErrorID
 */
typedef NS_ENUM(NSUInteger, ECG3ErrorID) {
    /// Electrode Loss
    ECG3Error_ElectrodeLoss = 1,
    /// Electrode Loss Recovery
    ECG3Error_ElectrodeLossRecovery,
    /// Electrode Loss Timeout
    ECG3Error_ElectrodeLossTimeout,
    /// SDCard Communication Error
    ECG3Error_SDCardCommunicationError,
    /// Collection Module Error
    ECG3Error_CollectionModuleError,
    /// Low Power
    ECG3Error_LowPower,
    /// Device Memory Full
    ECG3Error_DeviceMemoryFull,
    /// Disconnect
    ECG3Error_Disconnect,
    /// Over Time
    ECG3Error_OverTime,                 
   
    /// Delete Error
    ECG3Error_DeleteError,
    /// Error Data
    ECG3Error_ErrorData,
    /// No Data
    ECG3Error_NoData,
    /// Reset SDCard Error
    ECG3Error_ResetSDCardError,

    /// Parameter Error
    ECG3Error_ParameterError = 400,
    /// Firmware Version Is Not Supported
    ECG3Error_FirmwareVersionIsNotSupported

};



/**
 Sync Time
 */
typedef void (^DisposeECG3SyncTimeBlock)(BOOL resetSuc);

/**
 ECG3 ErrorID
 */
typedef void (^DisposeECG3ErrorBlock)(ECG3ErrorID errorID);

/**
 Start Measure
 */
typedef void (^DisposeECG3StartMeasureBlock)(BOOL resetSuc);

/**
 Measure Data
 */
typedef void (^DisposeECG3MeasureDataBlock)(NSArray* measureDataArray);

/**
 Finish Measure
 */
typedef void (^DisposeECG3FinishMeasureBlock)(BOOL resetSuc);

/**
 get Battery
 */
typedef void (^DisposeECG3GetBatteryBlock)(NSNumber *battery);


/**
 Start Sync
 */
typedef void (^DisposeECG3DataStartSyncBlock)(void);

/**
 Data Info
 */
typedef void (^DisposeECG3DataInfo)(NSDictionary *infoDic);

/**
 Finish Sync
 */
typedef void (^DisposeECG3DataFinishSyncBlock)(void);

/**
 Data Sync Progress
 */
typedef void (^DisposeECG3DataSyncProgressBlock)(NSNumber *dataProgress);

/**
 Delete All Data Success
 */
typedef void (^DisposeECG3DeleteAllDataSuccessBlock)(void);



#endif /* ECGMacroFile_h */
