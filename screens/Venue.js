import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    Share,
    Linking,
    Platform,
    Animated,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { icons, colors, fonts } from '../constants';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 100 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Venue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    renderBody() {
        const { item } = this.props.route.params;
        const { restaurant } = this.props.route.params;

        return (
            <View
                style={{
                    paddingBottom: 30,
                    marginTop: HEADER_MAX_HEIGHT
                }}
            >
                <TouchableOpacity
                    style={{
                        margin: 15,
                        marginBottom: 0,
                        borderRadius: 12,
                        flexDirection: 'row',
                        backgroundColor: colors.bottom
                    }}
                    onPress={() => this.props.navigation.navigate('Maps')}
                >
                    <View
                        style={{
                            flex: 1,
                            padding: 15
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 23,
                                color: colors.gray
                            }}
                        >{item.name}</Text>

                        <Text
                            style={{
                                ...fonts.h4,
                                fontSize: 17,
                                paddingTop: 10,
                                color: colors.gray
                            }}
                        >{item.address}</Text>

                        <View
                            style={{
                                paddingTop: 10,
                                flexDirection: 'row'
                            }}
                        >
                            <Text
                                style={{
                                    ...fonts.h5,
                                    fontSize: 15,
                                    color: colors.darkgray
                                }}
                            >{item.affordability}</Text>

                            <Text
                                style={{
                                    ...fonts.h5,
                                    fontSize: 15,
                                    paddingLeft: 10,
                                    color: colors.darkgray
                                }}
                            >{item.cuisine}</Text>

                            <Text
                                style={{
                                    ...fonts.h5,
                                    fontSize: 15,
                                    paddingLeft: 10,
                                    color: colors.darkgray
                                }}
                            >{item.district}</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            width: 22,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.h5,
                                fontSize: 30,
                                color: colors.gray
                            }}
                        >{"›"}</Text>
                    </View>
                </TouchableOpacity>

                {
                    item.menu.map(( item, index ) => (
                        <TouchableOpacity
                            style={{
                                margin: 15,
                                marginBottom: 0,
                                borderRadius: 12,
                                flexDirection: 'row',
                                backgroundColor: colors.bottom
                            }}
                            key={`menu-${index}`}
                            onPress={() => this.props.navigation.navigate("Order", { item, restaurant })}
                        >
                            <View
                                style={{ flex: 1 }}
                            >
                                <Text
                                    style={{
                                        ...fonts.h3,
                                        fontSize: 18,
                                        marginTop: 25,
                                        marginLeft: 12,
                                        color: colors.gray
                                    }}
                                >{item.name}</Text>

                                <Text
                                    style={{
                                        ...fonts.h3,
                                        fontSize: 19,
                                        marginTop: 20,
                                        marginLeft: 12,
                                        color: colors.gray
                                    }}
                                >£{item.price}</Text>
                            </View>

                            <View
                                style={{
                                    marginTop: 12,
                                    marginRight: 12,
                                    marginBottom: 12
                                }}
                            >
                                <Image
                                    style={{
                                        width: 85,
                                        height: 85,
                                        borderRadius: 8
                                    }}
                                    resizeMode="cover"
                                    source={item.photo}
                                />
                            </View>
                        </TouchableOpacity>
                    ))
                }

                <View
                    style={{
                        margin: 15,
                        marginTop: 25
                    }}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 23,
                            color: colors.gray
                        }}
                    >About {item.name}</Text>

                    <Text
                        style={{
                            ...fonts.h4,
                            fontSize:15,
                            lineHeight: 17,
                            paddingTop: 10,
                            color: colors.darkgray
                        }}
                    >{item.description}</Text>
                </View>
            </View>
        )
    }

    render() {
        const { item } = this.props.route.params;

        const callVenue = async () => {
            Linking.openURL(`tel:${item.number}`)
        };

        const shareVenue = async () => {
            Share.share({
                url: item.website
            });
        };
    
        const openBrowser = async () => {
            WebBrowser.openBrowserAsync( item.website, {
                controlsColor: "#01d494"
            });
        };

        const createThreeButtonAlert = () =>
        Alert.alert(
            item.name,
            null,
            [
                {
                    text: "Call Venue",
                    onPress: callVenue
                },
                {
                    text: "Share Venue",
                    onPress: shareVenue
                },
                {
                    text: "View Website",
                    onPress: openBrowser
                },
                {
                    text: "Cancel",
                    style: "cancel"
                }
            ]
        )

        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp'
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
        });

        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp'
        });

        const titleScale = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        });

        const titleTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, 0],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.container}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />

                <Animated.ScrollView
                    scrollEventThrottle={1}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true }
                    )}
                >
                    {this.renderBody()}
                </Animated.ScrollView>

                <Animated.View
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] }
                    ]}
                >
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }]
                            }
                        ]}
                        resizeMode="cover"
                        source={item.thumbnail}
                    />
                </Animated.View>

                <Animated.View
                    style={[
                        styles.bar,
                        {
                            transform: [
                                { scale: titleScale },
                                { translateY: titleTranslate }
                            ]
                        }
                    ]}
                >
                    <Text
                        style={ styles.title }
                    >{item.name}</Text>
                </Animated.View>

                <TouchableOpacity
                    style={ styles.close }
                    onPress={() => this.props.navigation.goBack()}
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

                <TouchableOpacity
                    style={ styles.more }
                    onPress={ createThreeButtonAlert }
                >
                    <Image
                        style={{
                            width: 18,
                            height: 18,
                            tintColor: colors.gray
                        }}
                        resizeMode="contain"
                        source={icons.more}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.loop_large }
                >
                    <Image
                        style={{
                            width: 18,
                            height: 18,
                            tintColor: colors.gray
                        }}
                        resizeMode="contain"
                        source={icons.loop_large}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.top
    },
    header: {
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        position: 'absolute',
        height: HEADER_MAX_HEIGHT,
        backgroundColor: colors.middle
    },
    backgroundImage: {
        top: 0,
        left: 0,
        right: 0,
        width: null,
        resizeMode: 'cover',
        position: 'absolute',
        height: HEADER_MAX_HEIGHT
    },
    bar: {
        top: 0,
        left: 0,
        right: 0,
        height: 30,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: colors.transparent,
        marginTop: Platform.OS === 'ios' ? 55 : 38
    },
    title: {
        ...fonts.h3,
        fontSize: 21,
        color: colors.gray
    },
    close: {
        top: 60,
        left: 20,
        position: 'absolute'
    },
    more: {
        top: 58,
        right: 58,
        position: 'absolute'
    },
    loop_large: {
        top: 58,
        right: 20,
        position: 'absolute'
    }
});