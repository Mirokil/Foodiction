import React from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from "react-native"
import { icons, colors } from '../constants';

const QR_Code = ({ navigation }) => {

    function renderCloseButton() {
        return (
            <TouchableOpacity
                style={{
                    margin: 20,
                    marginTop: 6
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={{
                        width: 15,
                        height: 15,
                        tintColor: colors.gray
                    }}
                    resizeMode="contain"
                    source={icons.close}
                />
            </TouchableOpacity>
        )
    }

    function renderQrCode() {
        return (
            <View
                style={{
                    margin: 20,
                    marginTop: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    style={{
                        width: "100%",
                        height: "73.5%",
                        borderRadius: 30
                    }}
                    resizeMode="contain"
                    source={icons.qr_code}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderCloseButton()}
            {renderQrCode()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.top
    }
})

export default QR_Code;