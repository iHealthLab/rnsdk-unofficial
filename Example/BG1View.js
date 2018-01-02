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
    BG1Module,
    BG1ProfileModule
} from 'ihealthlibrary-react-native';



var styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    contentContainer: {
        height: 200,
        marginTop: 20
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
    cell: {
        marginTop: 10,
        height: 25,
        alignItems: 'flex-start',
        justifyContent: 'center', 
        marginBottom: 5
    },
});


class TipView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tip: ''
        };
    }

    render() {
        console.info('TipView', 'render()', null);
        return (
            <View>
                <Text> Tip: {this.state.tip} </Text>
            </View>
        )
    }

}

export default class BG1View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            QRCode:"02554064554014322D1200A05542D3BACE1446CE9A96190122EFEE4D1864"
        }

    }

    componentWillMount() {
        console.info('BG1View', 'componentWillMount', '_addListener');
         this._addListener();
    }

    componentDidMount() {
        console.info('BG1View', 'componentDidMount',  null);
    }


    componentWillReceiveProps() {
        console.info('BG1View', 'componentWillReceiveProps', null);
    }

    shouldComponentUpdate() {
        console.info('BG1View', 'shouldComponentUpdate', null);
    }

    componentWillUpdate() {
        console.info('BG1View', 'componentWillUpdate', null);
    }

    componentDidUpdate() {
        console.info('BG1View', 'componentDidUpdate', null);
    }

    componentWillUnmount() {
        console.info('BG1View', 'componentWillUnmount', '_removeListener');
         this._removeListener();
    }


    _addListener() {
        let self = this;

        this.connectionListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            console.info('BG1View', 'addListener_DeviceDisconnect', JSON.stringify(e));
            self.props.navigation.goBack();
        });

        this.notifyListener = DeviceEventEmitter.addListener(BG1Module.Event_Notify, function (e: Event) {

            console.info('BG1View', BG1Module.Event_Notify ,'Action = ' +  e.action , 'Message =' + JSON.stringify(e));
            
            if(e.action===BG1ProfileModule.ACTION_BG1_SENDCODE_RESULT) {
                console.info(JSON.stringify(e));
            } else if (e.action === BG1ProfileModule.ACTION_BG1_MEASURE_ERROR) {
                console.info(JSON.stringify(e));
            } else if (e.action === BG1ProfileModule.ACTION_BG1_MEASURE_STRIP_IN) {
                 console.info(JSON.stringify(e));
            } else if (e.action === BG1ProfileModule.ACTION_BG1_MEASURE_GET_BLOOD) {
                 console.info(JSON.stringify(e));
            } else if (e.action === BG1ProfileModule.ACTION_BG1_MEASURE_RESULT) {
                 console.info(JSON.stringify(e));
            } else if (e.action === BG1ProfileModule.ACTION_BG1_MEASURE_STRIP_OUT) {
                 console.info(JSON.stringify(e));
            } else if (e.action === BG1ProfileModule.ACTION_BG1_MEASURE_STANDBY) {
                 console.info(JSON.stringify(e));
            }
            self.refs.TipView.setState({tip: JSON.stringify(e)});

        });
    }

    _removeListener() {
        //Unregister  event
        if (this.connectionListener) {
            this.connectionListener.remove()
        }
        if (this.notifyListener) {
            this.notifyListener.remove()
        }
    }

    _sendCode(QRCode,stripType,measureType) {
        BG1Module.sendCode(QRCode,stripType,measureType);
    }

    _getBottleInfoFromQR(QRCode) {
       BG1Module.getBottleInfoFromQR(QRCode);
    }


    render() {

        return (
            <View style={styles.container}>

                <ScrollView style={styles.contentContainer}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getBottleInfoFromQR(this.state.QRCode)}>
                        <Text style={styles.buttonText}>
                           parseCodeInfo
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._sendCode(this.state.QRCode,1,1)}>
                        <Text style={styles.buttonText}>
                            sendCode
                        </Text>
                    </TouchableOpacity>

                    
                </ScrollView>


                <TipView ref="TipView"/>
            </View>
        )
    }

}
