//
//  BP5S.h
//  iHealthSDKStatic
//
//  Created by Realank on 2017/7/14.
//  Copyright © 2017年 daiqingquan. All rights reserved.
//

#import "BPV24Device.h"


/**
 BP5S device class
 */
@interface BP5S : BPV24Device <BPBasicBTLEProtocol,BPRealtimeMeasureProtocol, BPOfflineDataTransferProtocol, BPEnableOfflineProtocol>



@end
