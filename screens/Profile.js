import React from "react";
import {
    View,
    Text,
    Image,
    Modal,
    Alert,
    FlatList,
    Platform,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from "react-native"
import * as AppleAuthentication from 'expo-apple-authentication';
import { icons, colors, fonts } from "../constants";

const Profile = () => {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [number, setNumber] = React.useState();
    const [password, setPassword] = React.useState();
    const [areas, setAreas] = React.useState([]);
    const [showPassword, setShowPassword] = React.useState(false);
    const [selectedArea, setSelectedArea] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);

    const createAlert = () =>
        Alert.alert(
            "Congratulations",
            "Your account has been created!",
            [{ text: "OK" }]
        )

    React.useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            let areaData = data.map(item => {
                return {
                    code: item.cca2.toLowerCase(),
                    name: item.name.common,
                    callingCode: item.idd.root+item.idd.suffixes,
                    flag: `https://flagcdn.com/w320/${item.cca2.toLowerCase()}.png`
                }
            })

            setAreas(areaData)

            if (areaData.length > 0) {
                let defaultData = areaData.filter(a => a.code == "gb")

                if (defaultData.length > 0) {
                    setSelectedArea(defaultData[0])
                }
            }
        })
    }, [])

    function renderHeader() {
        return (
            <View
                style={{
                    height: 80,
                    paddingBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    backgroundColor: colors.bottom
                }}
            >
                <Text
                    style={{
                        ...fonts.h3,
                        fontSize: 20,
                        color: colors.gray
                    }}
                >Welcome to Foodiction</Text>
            </View>
        )
    }

    function renderAppleSignIn() {
        return (
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={10}
                style={{
                    height: 65,
                    margin: 20,
                    marginTop: 25
                }}
                onPress={async () => {
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                            ],
                        });
                    } catch (error) {
                        if (error.code === 'ERR_CANCELED') {
                            console.log("Apple Sign In Canceled")
                        } else {
                            console.log("Apple Sign In Error")
                        }
                    }
                }}
            />
        )
    }

    function renderSignUpForm() {
        return (
            <View
                style={{ margin: 20 }}
            >
                <View
                    style={{
                        marginTop: -15,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            ...fonts.h5,
                            fontSize: 14,
                            color: colors.gray
                        }}
                    >— or sign up with your email —</Text>
                </View>

                <View
                    style={{ marginTop: 25 }}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 16,
                            color: colors.green
                        }}
                    >Name</Text>

                    <TextInput
                        style={{
                            ...fonts.h5,
                            height: 40,
                            fontSize: 18,
                            paddingLeft: 10,
                            marginVertical: 10,
                            color: colors.gray,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.darkgray
                        }}
                        spellCheck={false}
                        onChangeText={setName}
                        textContentType = 'name'
                        keyboardAppearance = 'dark'
                        selectionColor={colors.gray}
                        placeholder="What's your name?"
                        placeholderTextColor={colors.darkgray}
                    />
                </View>

                <View
                    style={{ marginTop: 20 }}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 16,
                            color: colors.green
                        }}
                    >Email Address</Text>

                    <TextInput
                        style={{
                            ...fonts.h5,
                            height: 40,
                            fontSize: 18,
                            paddingLeft: 10,
                            marginVertical: 10,
                            color: colors.gray,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.darkgray
                        }}
                        spellCheck={false}
                        onChangeText={setEmail}
                        selectionColor={colors.gray}
                        keyboardAppearance = 'dark'
                        keyboardType = 'email-address'
                        textContentType = 'emailAddress'
                        placeholder="What's your email?"
                        placeholderTextColor={colors.darkgray}
                    />
                </View>

                <View
                    style={{ marginTop: 20 }}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 16,
                            color: colors.green
                        }}
                    >Phone Number</Text>

                    <View
                        style={{ flexDirection: 'row' }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 110,
                                height: 40,
                                paddingLeft: 10,
                                marginVertical: 10,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                borderBottomColor: colors.darkgray
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Image
                                style={{
                                    top: 13,
                                    width: 12,
                                    height: 12,
                                    tintColor: colors.gray
                                }}
                                resizeMode="contain"
                                source={icons.down}
                            />

                            <View
                                style={{
                                    top: 7,
                                    flex: 1,
                                    marginLeft: 8
                                }}
                            >
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                    resizeMode="contain"
                                    source={{ uri: selectedArea?.flag }}
                                />
                            </View>
                            
                            <Text
                                style={{
                                    ...fonts.h5,
                                    top: 9,
                                    fontSize: 18,
                                    color: colors.gray
                                }}
                            >{selectedArea?.callingCode}</Text>
                        </TouchableOpacity>

                        <TextInput
                            style={{
                                ...fonts.h5,
                                flex: 1,
                                height: 40,
                                fontSize: 18,
                                marginLeft: 10,
                                marginVertical: 10,
                                borderBottomWidth: 1,
                                color: colors.gray,
                                borderBottomColor: colors.darkgray
                            }}
                            onChangeText={setNumber}
                            keyboardType = 'phone-pad'
                            keyboardAppearance = 'dark'
                            selectionColor={colors.gray}
                            placeholder="What's your number?"
                            textContentType = 'telephoneNumber'
                            placeholderTextColor={colors.darkgray}
                        />
                    </View>
                </View>

                <View
                    style={{ marginTop: 20 }}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 16,
                            color: colors.green
                        }}
                    >Password</Text>

                    <TextInput
                        style={{
                            ...fonts.h5,
                            height: 40,
                            fontSize: 18,
                            paddingLeft: 10,
                            marginVertical: 10,
                            color: colors.gray,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.gray
                        }}
                        maxLength = {18}
                        onChangeText={setPassword}
                        keyboardAppearance = 'dark'
                        textContentType = 'password'
                        placeholder="Choose a password"
                        selectionColor={colors.gray}
                        secureTextEntry={!showPassword}
                        placeholderTextColor={colors.darkgray}
                    />
                    
                    <TouchableOpacity
                        style={{
                            right: 0,
                            width: 30,
                            height: 30,
                            bottom: 10,
                            position: 'absolute'
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: colors.gray
                            }}
                            resizeMode="contain"
                            source={showPassword ? icons.invisible : icons.visible}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderSignUpButton() {
        return (
            <View
                style={{
                    margin: 30,
                    marginTop: 5
                }}
            >
                <TouchableOpacity
                    style={{
                        height: 65,
                        width: "100%",
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.green
                    }}
                    onPress={ createAlert }
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 26,
                            color: colors.darkblue
                        }}
                    >Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderAreaCodesModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 290,
                                height: 390,
                                borderRadius: 30,
                                backgroundColor: colors.gray
                            }}
                        >
                            <FlatList
                                contentContainerStyle={{
                                    padding: 15,
                                    paddingTop: 10,
                                    paddingRight: 20,
                                    paddingBottom: 10
                                }}
                                data={areas}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                padding: 10,
                                                alignItems: 'center',
                                                flexDirection: 'row'
                                            }}
                                            onPress={() => {
                                                setSelectedArea(item)
                                                setModalVisible(false)
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    marginRight: 10
                                                }}
                                                resizeMode="contain"
                                                source={{ uri: item.flag }}
                                            />
                                            
                                            <Text
                                                style={{
                                                    ...fonts.h5,
                                                    fontSize: 16,
                                                    color: colors.top
                                                }}
                                            >{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {renderHeader()}

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {renderAppleSignIn()}
                    {renderSignUpForm()}
                    {renderSignUpButton()}
                </ScrollView>
            </SafeAreaView>

            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.middle
    }
})

export default Profile;