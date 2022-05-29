import React from "react";
import {
    View,
    Text,
    Alert,
    Image,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { data, icons, colors, fonts } from '../constants';

const HomePage = ({ navigation }) => {

    const createTwoButtonAlert = () =>
    Alert.alert(
        "Do you own/operate a venue?",
        "Find out more and get started today with Foodiction!",
        [
            { text: "OK" },
            {
                text: "Learn More",
                onPress: openBrowser
            }
        ]
    )

    const openBrowser = async () => {
        WebBrowser.openBrowserAsync( 'https://reactnative.dev/', {
            controlsColor: "#01d494"
        });
    };

    function renderHeader() {
        return (
            <View
                style={{
                    height: 40,
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: "88%",
                            height: "100%",
                            borderRadius: 12,
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: colors.top
                        }}
                    >
                        <Image
                            style={{
                                width: 12.5,
                                height: 12.5,
                                marginLeft: 20,
                                marginBottom: 4,
                                tintColor: colors.darkgray
                            }}
                            resizeMode="contain"
                            source={icons.loop}
                        />

                        <Text
                            style={{
                                ...fonts.h5,
                                fontSize: 14,
                                marginLeft: 10,
                                color: colors.darkgray
                            }}
                        >Search Venues</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: 20,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("QR_Code_Scanner")}
                >
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: colors.gray
                        }}
                        resizeMode="contain"
                        source={icons.frame}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderBody() {
        return (
            <View
                style={{
                    padding: 20,
                    marginTop: 20
                }}
            >
                <Text
                    style={{
                        ...fonts.h3,
                        fontSize: 21,
                        marginBottom: 5,
                        color: colors.gray
                    }}
                >Hey there, felling hungry?</Text>

                <Text
                    style={{
                        ...fonts.h5,
                        fontSize: 14,
                        color: colors.gray
                    }}
                >Find a spot to order your meal with Foodiction.</Text>

                <TouchableOpacity
                    style={{
                        padding: 10,
                        marginTop: 20,
                        borderRadius: 12,
                        backgroundColor: colors.top
                    }}
                    onPress={ createTwoButtonAlert }
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 16,
                            marginBottom: 10,
                            color: colors.gray
                        }}
                    >Do you own/operate a venue?</Text>

                    <Text
                        style={{
                            ...fonts.h4,
                            fontSize: 14,
                            marginBottom: 5,
                            color: colors.gray
                        }}
                    >Offer your customers the best table ordering      {">"}</Text>

                    <Text
                        style={{
                            ...fonts.h4,
                            fontSize: 14,
                            color: colors.gray
                        }}
                    >and click {"&"} collect experience with Foodiction</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderVenuesList() {
        return (
            <View>
                <View
                    style={{
                        padding: 10,
                        paddingLeft: 20,
                        paddingRight: 30,
                        flexDirection: 'row'
                    }}
                >
                    <Text
                        style={{
                            ...fonts.h4,
                            flex: 1,
                            fontSize: 20,
                            color: colors.gray
                        }}
                    >What's near me?</Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <Text
                            style={{
                                ...fonts.h5,
                                left: 10,
                                fontSize: 20,
                                color: colors.gray
                            }}
                        >More {"›"}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal
                    data={data.venues}
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 10 }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    marginLeft: 20,
                                    marginRight: index == data.venues.length - 1 ? 20 : 0
                                }}
                                onPress={() => navigation.navigate("Venue", { item, restaurant: item })}
                            >
                                <Image
                                    style={{
                                        width: 300,
                                        height: 200,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12
                                    }}
                                    resizeMode="cover"
                                    source={item.thumbnail}
                                />

                                <View
                                    style={{
                                        borderBottomLeftRadius: 12,
                                        borderBottomRightRadius: 12,
                                        backgroundColor: colors.bottom
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...fonts.h3,
                                            fontSize: 18,
                                            marginTop: 15,
                                            marginLeft: 10,
                                            color: colors.gray
                                        }}
                                    >{item.name}</Text>

                                    <View
                                        style={{
                                            marginTop: 10,
                                            marginBottom: 10,
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...fonts.h5,
                                                fontSize: 14,
                                                marginLeft: 10,
                                                color: colors.darkgray
                                            }}
                                        >{item.affordability}</Text>

                                        <Text
                                            style={{
                                                ...fonts.h5,
                                                fontSize: 14,
                                                marginLeft: 10,
                                                color: colors.darkgray
                                            }}
                                        >{item.cuisine}</Text>

                                        <Text
                                            style={{
                                                ...fonts.h5,
                                                fontSize: 14,
                                                marginLeft: 10,
                                                color: colors.darkgray
                                            }}
                                        >{item.district}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderBody()}
            {renderVenuesList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.middle
    }
})

export default HomePage;