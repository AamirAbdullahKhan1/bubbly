import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'

const Register = () => {
  return (
    <KeyboardAvoidingView style = {{flex: 1 }} behavior={Platform.OS == 'ios' ? "padding" : "height"}>
        <ScreenWrapper showPattern = {true}>
          <View style = {styles.container}>
            <View style = {styles.header}>
                <BackButton iconSize={25}/>
                <Typo size={15} color={colors.white}>
                    Need Some Help?
                </Typo>
            </View>

            <View style = {styles.content}>
                <ScrollView contentContainerStyle = {styles.form} showsVerticalScrollIndicator = {false}>
                    <View style = {{gap: spacingY._10, marginBottom: spacingY._15}}>
                        <Typo size={28} fontWeight={'600'}>
                            Getting Started
                        </Typo>
                    </View>
                </ScrollView>
            </View>
          </View>
        </ScreenWrapper>
    </KeyboardAvoidingView>
  )
}

export default Register

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