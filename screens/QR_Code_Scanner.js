import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';
import * as WebBrowser from 'expo-web-browser';
import { icons, colors, fonts } from "../constants";

const QR_Code_Scanner = ({ navigation }) => {

    const [link, setLink] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);

    const handleBarCodeScanned = ({ data }) => {
        setLink(data);
        setScanned(true);
    };

    const openBrowser = async () => {
        WebBrowser.openBrowserAsync( link, {
            controlsColor: "#01d494"
        });
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    function renderHeader() {
        return (
            <View
                style={{
                    height: 55,
                    marginTop: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: colors.bottom
                }}
            >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 21,
                            color: colors.gray
                        }}
                    >Scan QR Code</Text>
            </View>
        )
    }

    function renderFrame() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    style={{
                        width: 230,
                        height: 230,
                        opacity: 0.3,
                        tintColor: colors.green
                    }}
                    resizeMode="stretch"
                    source={icons.frame}
                />
            </View>
        )
    }

    function renderButton() {
        return (
            <View
                style={{
                    height: 135,
                    alignItems: 'center'
                }}
            >
                {scanned ?
                    <TouchableOpacity
                        style={{
                            width: 230,
                            height: 65,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: colors.green
                        }}
                        onPress={openBrowser}
                    >
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 26,
                                color: colors.darkblue
                            }}
                        >Open</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        style={{
                            width: 230,
                            height: 65,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: colors.green
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 26,
                                color: colors.darkblue
                            }}
                        >Done</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            <Camera
                style={{ flex: 1 }}
                type={Camera.Constants.Type.back}
                onBarCodeScanned={handleBarCodeScanned}
            >
                {renderFrame()}
                {renderButton()}
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    }
})

export default QR_Code_Scanner;