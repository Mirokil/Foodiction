import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { data, icons, colors, fonts } from '../constants';

const Maps = ({ navigation }) => {

    function renderMaps() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%' }}
                customMapStyle={ data.mapDarkStyle }
                region={{
                    latitude: 51.512008,
                    longitude: -0.145592,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015
                }}
            >
                <Marker coordinate={{ latitude: 51.51267, longitude: -0.14149 }}>
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: 'rgb(255,0,0)'
                            }}
                            resizeMode="contain"
                            source={icons.marker}
                        />
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 11,
                                marginTop: 5,
                                color: colors.gray
                            }}
                        >Hélène Darroze</Text>
                    </View>
                </Marker>

                <Marker coordinate={{ latitude: 51.51013, longitude: -0.14959 }}>
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: 'rgb(255,0,0)'
                            }}
                            resizeMode="contain"
                            source={icons.marker}
                        />
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 11,
                                marginTop: 5,
                                color: colors.gray
                            }}
                        >The Square</Text>
                    </View>
                </Marker>

                <Marker coordinate={{ latitude: 51.507941, longitude: -0.144256 }}>
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: 'rgb(255,0,0)'
                            }}
                            resizeMode="contain"
                            source={icons.marker}
                        />
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 11,
                                marginTop: 5,
                                color: colors.gray
                            }}
                        >The Ritz Restaurant</Text>
                    </View>
                </Marker>
            </MapView>
        )
    }

    function renderCloseButton() {
        return (
            <TouchableOpacity
                style={{
                    top: 60,
                    left: 20,
                    position: 'absolute'
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

    return (
        <View>
            {renderMaps()}
            {renderCloseButton()}
        </View>
    )
}

export default Maps;