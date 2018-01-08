import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ListView,
    DeviceEventEmitter,
    TouchableHighlight,
    Picker,
    AsyncStorage,
    Button

} from 'react-native';


import {StackNavigator} from 'react-navigation';

import {
    SimpleListView
} from './SimpleListView';

import {
    AlertDialog
} from './AlertDialog';


import AMView from './AMView';
import BP5View from './BP5View';
import BP3LView from './BP3LView';
import BP550BTView from './BP550BTView';
import BP7SView from './BP7SView';
import PO3View from './PO3View';
import HS4SView from './HS4SView';
import BG1View from './BG1View';
import HS6View from './HS6View';
import BG5View from './BG5View';
import ECGView from './ECGView';
import ECGUSBView from './ECGUSBView';
import BTMView from './BTMView';
import {
    iHealthDeviceManagerModule
} from 'ihealthlibrary-react-native'

var STORAGE_KEY_DISCOVERY_TYPE = '@iHealthReactNative:keyDiscoveryType';
class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: iHealthDeviceManagerModule.BP5,
            pickerEnabled: true,
            scanStatus: false
        };
        AsyncStorage.getItem(STORAGE_KEY_DISCOVERY_TYPE, (err, type) => {
            if (err == null && type != null) {
                let typNum = parseInt(type)
                this.setState({
                    type: isNaN(typNum) ? type : typNum
                })
            }
        })
    }


    authenConfigureInfo() {
        this.removeListener()
        this.addListener()
        // iHealthDeviceManagerModule.authenAppSecret("appSecret", (authenResult) => {
        //     console.log("authenResult:" + authenResult)
        // })
        iHealthDeviceManagerModule.authenConfigureInfo('heds@12.com', '2a8387e3f4e94407a3a767a72dfd52ea', 'fd5e845c47944a818bc511fb7edb0a77')
    }


    startDiscovery() {
        console.info('scan device ------' + this.state.type)

        if (this.state.type == iHealthDeviceManagerModule.HS6) {
            this.props.navigation.navigate('HS6',{type: 'HS6'})
        } else {
            this.removeListener()
            this.addListener()
            iHealthDeviceManagerModule.stopDiscovery();
            discoverDeviceArray = new Array()
            this.refs.discoverListView.notifyDataSetChanged()
            iHealthDeviceManagerModule.startDiscovery(this.state.type)
        }

    }


    componentDidMount() {
        this.refs.connectedListView.notifyDataSetChanged()
        this.refs.discoverListView.notifyDataSetChanged()

    }

    componentWillUnmount() {
        console.log('~~~~~~~componentWillUnmount')
        //this.removeListener()
        discoverDeviceArray = [];
        connectedDeviceArray = [];
    }

    addListener() {
        let self = this
        this.authenListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Authenticate_Result, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
        });
        this.scanListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Scan_Device, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
            self.updateDiscoveryList(e.mac, e.type)
        });
        this.scanFinishListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Scan_Finish, function (e: Event) {
            // handle event.
            console.log('~~~ScanFinish')
        });

        this.connectSuccessListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Connected, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
            self.updateConnectedList(e.mac, e.type, 1)
        });
        this.connectFailedListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Connect_Failed, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
            self.updateConnectedList(e.mac, e.type, 3)
        });
        this.disconnectListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
            self.updateConnectedList(e.mac, e.type, 2)
        });
    }

    removeListener() {
        //Unregister  event
        if (this.authenListener) {
            this.authenListener.remove()
        }
        if (this.scanListener) {
            this.scanListener.remove()
        }
        if (this.scanFinishListener) {
            this.scanFinishListener.remove()
        }
        if (this.connectSuccessListener) {
            this.connectSuccessListener.remove()
        }
        if (this.connectFailedListener) {
            this.connectFailedListener.remove()
        }
        if (this.disconnectListener) {
            this.disconnectListener.remove()
        }
    }

    //Update discovery device list
    updateDiscoveryList(mac, type) {
        var existFlag = 0
        for (var i = 0; i < discoverDeviceArray.length; i++) {
            if (discoverDeviceArray[i].mac == mac) {
                existFlag = 1
                break
            }
        }
        if (existFlag == 0) {
            var deviceInfo = {"mac": mac, "type": type}
            discoverDeviceArray.push(deviceInfo)
        }
        if (this.refs.discoverListView) {
            this.refs.discoverListView.notifyDataSetChanged()
            this.refs.connectedListView.notifyDataSetChanged()
        }
    }

    //Update discovery device list
    updateConnectedList(mac, type, status) {
        //Connect success
        if (status == 1) {
            var existFlag = 0;
            for (var i = 0; i < connectedDeviceArray.length; i++) {
                if (connectedDeviceArray[i].mac == mac) {
                    existFlag = 1
                    break
                }
            }
            if (existFlag == 0) {
                var deviceInfo = {"mac": mac, "type": type}
                connectedDeviceArray.push(deviceInfo)
            }
            //Update discovery device list
            for (var i = 0; i < discoverDeviceArray.length; i++) {
                if (mac == discoverDeviceArray[i].mac) {
                    discoverDeviceArray.splice(i, 1)
                }
            }

        } else if (status == 2) {
            //Disconnect
            for (var i = 0; i < connectedDeviceArray.length; i++) {
                if (connectedDeviceArray[i].mac == mac) {
                    connectedDeviceArray.splice(i, 1)
                }
            }
        }
        if (this.refs.discoverListView) {
            this.refs.discoverListView.notifyDataSetChanged()
            this.refs.connectedListView.notifyDataSetChanged()
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <AlertDialog
                    ref="dialog"
                    title="Select Type"
                    leftButtonText="Cancel"
                    rightButtonText="Start"
                    getView={() => {
                        return (
                            <Picker
                                selectedValue={this.state.type}
                                onValueChange={(value) => {
                                    this.setState({type: value})
                                }}
                                enabled={this.state.pickerEnabled}
                                mode="dropdown"
                                //when mode is dialog will work
                                prompt="choese device to discovery">

                                {/*<Picker.Item label='BP5S' value={iHealthDeviceManagerModule.BP5S}/>*/}

                                <Picker.Item label='AM3S' value={iHealthDeviceManagerModule.AM3S}/>
                                <Picker.Item label='AM4' value={iHealthDeviceManagerModule.AM4}/>
                                <Picker.Item label='BG1' value={iHealthDeviceManagerModule.BG1}/>
                                <Picker.Item label='BG5' value={iHealthDeviceManagerModule.BG5}/>
                                <Picker.Item label='BP3L' value={iHealthDeviceManagerModule.BP3L}/>
                                <Picker.Item label='BP5' value={iHealthDeviceManagerModule.BP5}/>
                                <Picker.Item label='BP7S' value={iHealthDeviceManagerModule.BP7S}/>
                                <Picker.Item label='KN-550BT' value={iHealthDeviceManagerModule.KN550}/>
                                <Picker.Item label='HS4S' value={iHealthDeviceManagerModule.HS4S}/>
                                <Picker.Item label='HS6' value={iHealthDeviceManagerModule.HS6}/>
                                <Picker.Item label='PO3' value={iHealthDeviceManagerModule.PO3}/>
                                <Picker.Item label='ECG' value={iHealthDeviceManagerModule.ECG}/>
                                <Picker.Item label='ECGUSB' value={iHealthDeviceManagerModule.ECGUSB}/>
                                <Picker.Item label='BTM' value={iHealthDeviceManagerModule.BTM}/>

                                {/*<Picker.Item label='BG5L' value={iHealthDeviceManagerModule.BG5L}/>*/}


                            </Picker>
                        )
                    }}
                    onClick={(index) => {
                        if (index == 1) {
                            this.startDiscovery()
                            try {
                                AsyncStorage.setItem(STORAGE_KEY_DISCOVERY_TYPE, this.state.type.toString());
                            } catch (error) {
                                console.warn('AsyncStorage error : ' + error.message)
                            }
                        }
                    }}
                />
                <TouchableOpacity
                    style={{
                        height: 60,
                        justifyContent: 'center',
                        backgroundColor: '#eedddd',
                        alignItems: 'center',
                    }}
                    onPress={() => this.authenConfigureInfo()}>
                    <Text style={styles.buttonText}>
                        Authenticate SDK
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={{
                        height: 60,
                        marginTop: 5,
                        justifyContent: 'center',
                        backgroundColor: '#eedddd',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        this.refs.dialog.setModalVisible(true)
                    }}>
                    <Text style={styles.buttonText}>
                        Scan
                    </Text>
                </TouchableOpacity>


                <Text style={styles.headText}> Scan list </Text>
                <SimpleListView
                    ref='discoverListView'
                    style={{backgroundColor: '#fafafa'}}
                    navigator={this.props.navigator}
                    getData={() => {
                        return discoverDeviceArray
                    }}
                    compareData={(oldData, newData) => {
                        return oldData.type == newData.type && oldData.mac == newData.mac
                    }}
                    getView={(rowData, sectionID, rowID) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('_pressRow:' + rowID)
                                        iHealthDeviceManagerModule.connectDevice(rowData.mac, rowData.type)
                                    }}
                                    underlayColor="transparent">
                                    <View>
                                        <View style={styles.listItem}>
                                            <Text style={styles.listItemTitle}>{rowData.type}</Text>
                                            <Text style={styles.listItemDesc}>{rowData.mac}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.listItemBorder}/>
                            </View>
                        )
                    }}
                />

                <Text style={styles.headText}> Connected list </Text>

                <SimpleListView
                    ref='connectedListView'
                    style={{backgroundColor: '#fafafa'}}
                    navigator={this.props.navigator}
                    getData={() => {
                        return connectedDeviceArray
                    }}
                    compareData={(oldData, newData) => {
                        return oldData.type == newData.type && oldData.mac == newData.mac
                    }}
                    getView={(rowData, sectionID, rowID) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('_pressRow:' + rowID);
                                        if (rowData.type === 'KN-550BT') {
                                            rowData.type = 'KN_550BT';
                                        }
                                        this.props.navigation.navigate(rowData.type, {type: rowData.type, mac: rowData.mac})
                                    }}
                                    underlayColor="transparent">
                                    <View>
                                        <View style={styles.listItem}>
                                            <Text style={styles.listItemTitle}>{rowData.type}</Text>
                                            <Text style={styles.listItemDesc}>{rowData.mac}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.listItemBorder}/>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}


const SimpleStackNavigator = StackNavigator({
    MainView: {
        screen: MainView,
        navigationOptions: {
            headerTitle: 'iHealthReactNative',
            headerTitleStyle:{
                alignSelf: 'center'
            }
        }
    },
    BP5: {
        screen: BP5View,
        navigationOptions: {
            headerTitle: 'BP5View'
        }
    },
    AM4: {
        screen: AMView,
        navigationOptions: {
            headerTitle: 'AMView'
        }
    },
    AM3S: {
        screen: AMView,
        navigationOptions: {
            headerTitle: 'AMView'
        }
    },
    BP3L: {
        screen: BP3LView,
        navigationOptions: {
            headerTitle: 'BP3LView'
        }
    },
    KN_550BT: {
        screen: BP550BTView,
        navigationOptions: {
            headerTitle: 'BP550BTView'
        }
    },
    BP7S: {
        screen: BP7SView,
        navigationOptions: {
            headerTitle: 'BP7SView'
        }
    },
    PO3: {
        screen: PO3View,
        navigationOptions: {
            headerTitle: 'PO3View'
        }
    },
    HS4: {
        screen: HS4SView,
        navigationOptions: {
            headerTitle: 'HSView'
        }
    },
    HS4S: {
        screen: HS4SView,
        navigationOptions: {
            headerTitle: 'HSView'
        }
    },
    BG1: {
        screen: BG1View,
        navigationOptions: {
            headerTitle: 'BG1View'
        }
    },
    BG1: {
        screen: BG1View,
        navigationOptions: {
            headerTitle: 'BG1View'
        }
    },
    BG5: {
        screen: BG5View,
        navigationOptions: {
            headerTitle: 'BG5View'
        }
    },
    HS6: {
        screen: HS6View,
        navigationOptions: {
            headerTitle: 'HS6View'
        }
    },
    ECG: {
        screen: ECGView,
        navigationOptions: {
            headerTitle: 'ECGView'
        }
    },
    ECGUSB: {
        screen: ECGUSBView,
        navigationOptions: {
            headerTitle: 'ECGUSBView'
        }
    },
    BTM: {
        screen: BTMView,
        navigationOptions: {
            headerTitle: 'BTMView'
        }
    }


})


var discoverDeviceArray = [];
var connectedDeviceArray = [];

export default class LaunchView extends Component {


    render() {
        return (
            <SimpleStackNavigator/>
        )
    }

}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    // Navigation bar
    heading: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    // Navigation bar text
    headText: {
        color: '#ff5555',
        fontSize: 22,
        backgroundColor: '#fafafa',
    },
    // Button
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#eedddd',
        alignItems: 'center'
    },
    // Button text
    buttonText: {
        fontSize: 18
    },
    listItem: {
        justifyContent: 'center',
        paddingTop: 3,
        paddingRight: 15,
        paddingLeft: 15,
    }, listItemBorder: {
        marginTop: 1,
        height: 1,
        backgroundColor: "#D9D9D9",
    }, listItemTitle: {
        fontSize: 22,
    }, listItemDesc: {
        fontSize: 13,
    }, navigationBarTitle: {
        textAlignVertical: 'center',
        fontSize: 20,
        color: 'white',
    }, navigationBarBack: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
