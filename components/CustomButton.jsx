import {Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading
}) => {
    return (
        <TouchableOpacity className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
        }`}>
            <Text>CustomButton</Text>
        </TouchableOpacity>
    )
}

export default CustomButton