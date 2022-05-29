import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { HomePage, Menu, Profile } from "../screens"

import { icons, colors } from "../constants"

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center"
                }}
            >
                <View
                    style={{
                        top: 0,
                        position: 'absolute',
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: colors.top
                        }}
                    ></View>

                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={colors.top}
                        />
                    </Svg>

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: colors.top
                        }}
                    ></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.top
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: colors.top
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 30,
                        position: 'absolute',
                        backgroundColor: colors.top
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    elevation: 0,
                    borderTopWidth: 0,
                    position: 'absolute',
                    backgroundColor: "transparent"
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.green : colors.gray
                            }}
                            resizeMode="contain"
                            source={icons.restaurant}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.green : colors.gray
                            }}
                            resizeMode="contain"
                            source={icons.cutlery}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.green : colors.gray
                            }}
                            resizeMode="contain"
                            source={icons.user}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs