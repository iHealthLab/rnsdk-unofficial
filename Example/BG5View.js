import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';

import {
    iHealthDeviceManagerModule,
    BG5Module,
    BGProfileModule
} from 'ihealthlibrary-react-native';



var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // 
    heading: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 10
    },
    // 
    headText: {
        color: '#ff5555',
        fontSize: 22
    },
    // 
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center', 
        backgroundColor: '#eedddd',
        alignItems: 'center'
    },
    // 
    buttonText: {
        fontSize: 18
    },
    cell: {
        marginTop: 10,
        height: 25,
        alignItems: 'flex-start',
        justifyContent: 'center', 
        marginBottom: 5
    },
});

export default class BG5View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultText: "",
            QRCode:"02323C641E3114322D0800A064646464646464646464FA012261000E1CCC",
            BottleID:"4294967295"
        }
    }
    componentWillMount() {
        this.addListener();
    }

    componentWillUnmount() {
        this.removeListener();
    }


    addListener() {
        let self = this

        this.disConnectionListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            console.log('BG5' + '_addListener()_DeviceDisConnect', JSON.stringify(e));
            // I/Runtime_iHealthDM: onDeviceConnectionStateChange(8CDE52B5F928, BG5, 2, 0)
            // I/ReactNativeJS: 'BG5_addListener()_DeviceDisConnect', '{"errorid":0,"type":"BG5","mac":"8CDE52B5F928"}'
            self.props.navigation.goBack();
        });

        this.notifyListerner = DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event) {
            console.info('BG5View', 'addListener_NotifyLinstener', "Action = " + e.action + '\n' + "Message = " + JSON.stringify(e));
            if (e.action == BGProfileModule.ACTION_KEEP_LINK) {
                resultText = 'Keep link success'
            }
            else if (e.action == BGProfileModule.ACTION_GET_BATTERY) {
                console.info('BG5View', BGProfileModule.GET_BATTERY + JSON.stringify(e));
                resultText = 'bg5 battery : ' + e[BGProfileModule.GET_BATTERY];
            }
            else if (e.action == BGProfileModule.ACTION_SET_TIME) {
                resultText = 'Set time success'
            }
            else if (e.action == BGProfileModule.ACTION_SET_UNIT) {
                resultText = 'Set unit success'
            }
            else if (e.action == BGProfileModule.ACTION_START_MEASURE) {
                resultText = 'Start measure success'
            }
            else if (e.action == BGProfileModule.ACTION_GET_OFFLINEDATA) {
                resultText += '\nOffline data : ' + JSON.stringify(e[BGProfileModule.GET_OFFLINEDATA]);
            }
            else if (e.action == BGProfileModule.ACTION_GET_OFFLINEDATA_COUNT) {
                console.info('Offline ' + e.action);
                resultText = 'Offline data count 111 : ' + e[BGProfileModule.GET_OFFLINEDATA_COUNT];
            }
            else if (e.action == BGProfileModule.ACTION_DELETE_OFFLINEDATA) {
                resultText = 'Delete success'
            }
            else if (e.action == BGProfileModule.ACTION_SET_BOTTLEMESSAGE) {
                resultText = JSON.stringify(e);
            }
            else if (e.action == BGProfileModule.ACTION_GET_BOTTLEMESSAGE) {
                resultText = 'Expire time : ' + e[BGProfileModule.GET_EXPIRECTIME] + "  ";
                resultText += 'UseNum: ' + e[BGProfileModule.GET_USENUM];
            }
            else if (e.action == BGProfileModule.ACTION_SET_BOTTLEID) {
                resultText = 'Set bottleID success'
            }
            else if (e.action == BGProfileModule.ACTION_GET_BOTTLEID) {
                resultText = 'BottleID is : ' + e[BGProfileModule.GET_BOTTLEID];
            }
            else if (e.action == BGProfileModule.ACTION_STRIP_IN) {
                resultText = 'get the strip in ';
            }
            else if (e.action == BGProfileModule.ACTION_STRIP_OUT) {
                resultText = 'get the strip out ';
            }
            else if (e.action == BGProfileModule.ACTION_GET_BLOOD) {
                resultText = 'get the blood ';
            }
            else if (e.action == BGProfileModule.ACTION_ONLINE_RESULT_BG) {
                // onDeviceNotify(010203000003, BG5L, action_value_bg, {"result":146,"dataID":"3E995A712827354FB660B89A06B2AB99"})
                resultText = 'measure result : ' + e[BGProfileModule.ONLINE_RESULT_BG] + ' dataID : ' + e[BGProfileModule.DATA_ID];
            }
            else if (e.action == BGProfileModule.ACTION_ERROR_BG) {
                let errorNumber = e[BGProfileModule.ERROR_NUM_BG]
                let errorDescription = e[BGProfileModule.ERROR_DESCRIPTION_BG]
                resultText = "Error happens:\nerrorNumber = " + errorNumber + "\nDescreption: " + errorDescription;
            } else if(e.action == BGProfileModule.ACTION_CODE_ANALYSIS){
                BottleID = e[BGProfileModule.BOTTLEID_BG]
                resultText = JSON.stringify(e)
                console.log('BottleID = ' + BottleID)
                self.setState({BottleID: BottleID})
            }
            else {
                resultText =JSON.stringify(e)
            }
            console.info('BG5View', resultText);
            // self.refs.tipView.setState({resultText: resultText});
            self.setState({resultText: resultText})
        });
    }

    removeListener() {
        //Unregister  event

        if (this.disConnectionListener) {
            this.disConnectionListener.remove()
        }

        if (this.notifyListerner) {
            this.notifyListerner.remove()
        }
    }

    getBottleInfoFromQR(QRCode){
        console.log("  BG5 getBottleInfoFromQR  " + QRCode);
        BG5Module.getBottleInfoFromQR(QRCode);
    }

    holdLink() {
        console.log("  BG5 holdLink  ");
        BG5Module.holdLink(this.props.navigation.state.params.mac);
    }

    getBattery() {
        console.log("  BG5 getBattery  ");
        BG5Module.getBattery(this.props.navigation.state.params.mac);
    }

    setTime() {
        console.log("  BG5 setTime  ");
        BG5Module.setTime(this.props.navigation.state.params.mac);
    }

    setUnit(type) {
        console.log("  BG5 setUnit  " + type);
        BG5Module.setUnit(this.props.navigation.state.params.mac, type);
    }

    startMeasure(type) {
        console.log("  BG5 startMeasure  " + type);
        BG5Module.startMeasure(this.props.navigation.state.params.mac, type);
    }

    getOfflineData() {
        console.log("  BG5 getOfflineData  ");
        BG5Module.getOfflineData(this.props.navigation.state.params.mac);
    }

    deleteOfflineData() {
        console.log("  BG5 deleteOfflineData  ");
        BG5Module.deleteOfflineData(this.props.navigation.state.params.mac);
    }

    setBottleMessage(stripType, measureType, QRCode, stripNum, overDate) {
        console.log("  BG5 setBottleMessage  " + "stripType= " + stripType + " measureType="+measureType + " QRCode="
                + QRCode + " stripNum=" +stripNum + " overDate="+overDate);
        BG5Module.setBottleMessage(this.props.navigation.state.params.mac, stripType, measureType, QRCode , stripNum, overDate);
    }

    getBottleMessage() {
        console.log("  BG5 getBottleMessage  ");
        BG5Module.getBottleMessage(this.props.navigation.state.params.mac);
    }

    setBottleID(ID) {
        console.log("  BG5 setBottleID  " + ID);
        BG5Module.setBottleID(this.props.navigation.state.params.mac, ID);
    }

    getBottleID() {
        console.log("  BG5 getBottleID  ");
        BG5Module.getBottleID(this.props.navigation.state.params.mac);
    }

    disConnect() {
        console.log("  BG5 disConnect  ");
        BG5Module.disConnect(this.props.navigation.state.params.mac);
    }

    _getAllConnectedDevices(){
        BG5Module.getAllConnectedDevices();
    }

    render() {

        return (
            <View style={styles.container}>

                <ScrollView
                    style={{height: 60, paddingBottom: 10}}>
                    <Text>{this.state.resultText}</Text>
                </ScrollView>
                <ScrollView style={styles.contentContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                        GetAllConnectedDevices
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.getBottleInfoFromQR(this.state.QRCode)}>
                        <Text style={styles.buttonText}>
                            parseCodeInfo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.holdLink()}>
                        <Text style={styles.buttonText}>
                            holdLink
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.setTime()}>
                        <Text style={styles.buttonText}>
                            setTime
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.setUnit(1)}>
                        <Text style={styles.buttonText}>
                            setUnit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.getBattery()}>
                        <Text style={styles.buttonText}>
                            getBattery
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.startMeasure(1)}>
                        <Text style={styles.buttonText}>
                            startMeasure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.getOfflineData()}>
                        <Text style={styles.buttonText}>
                            getOfflineData
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.deleteOfflineData()}>
                        <Text style={styles.buttonText}>
                            deleteOfflineData
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.setBottleMessage(1,1,this.state.QRCode,25,"2017-07-15")}>
                        <Text style={styles.buttonText}>
                            setBottleMessage
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.getBottleMessage()}>
                        <Text style={styles.buttonText}>
                            getBottleMessage
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.setBottleID(this.state.BottleID)}>
                        <Text style={styles.buttonText}>
                            setBottleID
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.getBottleID()}>
                        <Text style={styles.buttonText}>
                            getBottleID
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.disConnect()}>
                        <Text style={styles.buttonText}>
                            disConnect
                        </Text>
                    </TouchableOpacity>
                </ScrollView>


                {/*<TipView ref="tipView"/>*/}
            </View>
        )
    }
}
