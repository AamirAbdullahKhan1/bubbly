import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import { Mail, Lock } from 'lucide-react-native'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import Button from '@/components/Button'

const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async () => {
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Login', "Please fill in all the fields")
            return
        }
    }
  return (
    <KeyboardAvoidingView style = {{flex: 1 }} behavior={Platform.OS == 'ios' ? "padding" : "height"}>
        <ScreenWrapper showPattern = {true}>
          <View style = {styles.container}>
            <View style = {styles.header}>
                <BackButton iconSize={25}/>
                <Typo size={15} color={colors.white}>
                    Forgot Your Password?
                </Typo>
            </View>

            <View style = {styles.content}>
                <ScrollView contentContainerStyle = {styles.form} showsVerticalScrollIndicator = {false}>
                    <View style = {{gap: spacingY._10, marginBottom: spacingY._15}}>
                        <Typo size={28} fontWeight={'600'}>
                            Welcome Back!
                        </Typo>
                        <Typo size={15} color={colors.neutral600} fontWeight={'600'}>
                            We are happy to see you!
                        </Typo>
                    </View>

                    <Input 
                    placeholder='Enter your email'
                    onChangeText={(value: string) => emailRef.current = value}
                    icon = {<Mail size={verticalScale(26)} color={colors.neutral700}/>}
                     />
                    <Input 
                    placeholder='Enter your password'
                    secureTextEntry
                    onChangeText={(value: string) => passwordRef.current = value}
                    icon = {<Lock size={verticalScale(26)} color={colors.neutral700}/>}
                     />

                     <View style = {{marginTop: spacingY._25, gap: spacingY._15}}>
                        <Button loading = {isLoading} onPress={handleSubmit}>
                            <Typo fontWeight={'bold'} color={colors.black} size = {20}>
                                Sign Up
                            </Typo>
                        </Button>

                        <View style = {styles.footer}>
                            <Typo>
                                Don't have an account?
                            </Typo>
                            <Pressable onPress = {() => router.push('/(auth)/register')}>
                                <Typo fontWeight={'bold'} color={colors.primaryDark}>Sign Up</Typo>
                            </Pressable>
                        </View>
                     </View>
                </ScrollView>
            </View>
          </View>
        </ScreenWrapper>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingX._30,
        marginHorizontal: spacingX._20,
        justifyContent: 'space-between'
    },

    header: {
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._15,
        paddingBottom: spacingX._25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: radius._50,
        borderTopRightRadius: radius._50,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._20
    },

    form: {
        gap: spacingY._15,
        marginTop: spacingY._20
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
})