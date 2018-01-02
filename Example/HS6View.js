/**
 * Created by lixuesong on 16/11/11.
 */
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
    HS6Module,
    HS6ProfileModule
} from 'ihealthlibrary-react-native';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
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
        fontSize: 22
    },
    // Button
    button: {
        height: 45,
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

export default class HS6View extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resultText: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{height: 100, paddingBottom: 10}}>
                    <Text>{this.state.resultText}</Text>
                </ScrollView>
                <ScrollView style={styles.contentContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS6Module.init("heds@12.com")
                        }}>
                        <Text style={styles.buttonText}>
                            Set User
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS6Module.setWifi("Jack_Potter3019", "iHealth123456")
                        }}>
                        <Text style={styles.buttonText}>
                            Set Wifi
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS6Module.bindDeviceHS6("1999-11-12 11:29:10", 46.7, 160, 2, 1, "ACCF2337A94E")
                        }}>
                        <Text style={styles.buttonText}>
                            Bind Device
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS6Module.unBindDeviceHS6("ACCF2337A94E")
                        }}>
                        <Text style={styles.buttonText}>
                            un Bind Device
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS6Module.getToken("2a8387e3f4e94407a3a767a72dfd52ea", "fd5e845c47944a818bc511fb7edb0a77", "heds@12.com", "random_str")
                        }}>
                        <Text style={styles.buttonText}>
                            Get Token
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS6Module.setUnit("heds@12.com", 0)
                        }}>
                        <Text style={styles.buttonText}>
                            Set Unit
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    componentWillMount() {
        console.info('HS6View', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);

    };
    componentDidMount() {
        let self = this

        this.notifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify, function (e: Event) {
            let resultText
            let action = e.action
            if (action == HS6ProfileModule.ACTION_HS6_SETWIFI) {
                resultText = "The set wifi result information:"
                let result = e[HS6ProfileModule.SETWIFI_RESULT]
                resultText += "\nset wifi result = " + result
            } else if (action == HS6ProfileModule.ACTION_HS6_BIND) {
                let bindExtra = e[HS6ProfileModule.HS6_BIND_EXTRA]
                resultText = "Get bind extra successfully.\nThere is(are) " + bindExtra.length
                    + " data(s) in total:\n"
                for (let i = 0; i < bindExtra.length; i++) {
                    let dataInfo = bindExtra[i]
                    let result = dataInfo[HS6ProfileModule.BIND_HS6_RESULT]
                    let model = dataInfo[HS6ProfileModule.HS6_MODEL]
                    let position = dataInfo[HS6ProfileModule.HS6_POSITION]
                    let settedWifi = dataInfo[HS6ProfileModule.HS6_SETTED_WIFI]
                    resultText += "---------------------------------------------------------------"
                    resultText += "\nresult = " + result
                    resultText += "\nmodel = " + model
                    resultText += "\nposition = " + position
                    resultText += "\nsettedWifi = " + settedWifi
                }
            } else if (action == HS6ProfileModule.ACTION_HS6_UNBIND) {
                resultText = "The unbind information:"
                let result = e[HS6ProfileModule.HS6_UNBIND_RESULT]
                resultText += "\nunbind result = " + result
            } else if (action == HS6ProfileModule.ACTION_HS6_GET_TOKEN) {
                resultText = "The get token information:"
                let result = e[HS6ProfileModule.GET_TOKEN_RESULT]
                resultText += "\nget token result = " + JSON.stringify(e)
            } else if (action == HS6ProfileModule.ACTION_HS6_SET_UNIT) {
                resultText = "The set unit information:"
                let result = e[HS6ProfileModule.SET_UNIT_RESULT]
                resultText += "\nset unit result = " + result
            } else if (action == HS6ProfileModule.ACTION_HS6_ERROR) {
                resultText = "The error information:"
                let result = e[HS6ProfileModule.HS6_ERROR]
                resultText += "\nerror = " + JSON.stringify(e)
            } else {
                resultText = JSON.stringify(e)
            }
            self.setState({resultText: resultText})
        });
    }

    componentWillUnmount() {
        this.notifyListener.remove();
    }
}
