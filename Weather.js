import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'rainy',
        gradient: ['#000428', '#004e92'],
        title: 'Дождь',
        subtitle: 'Sad-погодка :(',
    },
    Snow: {
        iconName: 'snow',
        gradient: ['#e6dada','#274046'],
        title: 'Снег',
        subtitle: 'А снег идет, снег идет...',
    },
    Thunderstorm: {
        iconName: 'thunderstorm',
        gradient: ['#141E30', '#243B55'],
        title: 'Гроза',
        subtitle: 'Берегись, Зевс ультует!',
    },
    Drizzle: {
        iconName: 'cloud-drizzle',
        gradient: ['#141E30', '#243B55'],
        title: 'Морось',
        subtitle: 'Моросит',
    },
    Clear: {
        iconName: 'sunny',
        gradient: ['#ffb75e', '#ed8f03'],
        title: 'Солнечно',
        subtitle: 'Надевай очки, идем на пляж :)',
    },
    Clouds: {
        iconName: 'partly-sunny',
        gradient: ['#5c258d', '#4389a2'],
        title: 'Облачно',
        subtitle: 'Какая разница, ты тоже солнышко <3',
    }
}

export default function Weather ({temp, condition}) {
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                    <StatusBar barStyle = "light-content" />
                                <View style = {styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={96} color = "white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust","Smoke","Haze","Mist", "Clear", "Clouds"]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white", 
        fontWeight: "300",
        marginBottom: 10,
        fontSize:44,
    },
    subtitle: {
        color: "white", 
        fontWeight: "300",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})
