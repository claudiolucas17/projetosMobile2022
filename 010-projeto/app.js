import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Button, Text, View, Alert, SafeArenaView} from 'react-native';
import Constants from 'expo-constants';

function Separator(){
    return <View style={Styles.separator}/>
}

export default function App(){
    return(
        <SafeArenaView style={StyleSheet.container}>
            <Button title="Aperte aqui" onPress={() => {alert('simples')}}></Button>

            <separator/>
            <View>
                <Text style={styles.title}>
                    Adjust the color in a way that looks standard on each plataform. On iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
                </Text>
                <Button 
                    title="Aperte aqui"
                    color="#f194ff"
                    onPress={() =>{alert('Button with adjusted color pressed')}}
                />
            </View>
            <separator/>
            <View>
                <Text style={styles.title}>
                    All interaction for the component are disabled.
                </Text>
                <Button
                    title="Aperte aqui"
                    disabled
                    onPress={()=>{alert('Cannot press this one')}}
                />
            </View>
            <separator/>
            <View>
                <Text style={styles.title}>
                    This layout strategy lets the title define the width of the button.
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Botão esquerdo"
                        onPress={() =>{alert('Left button pressed')}}
                    />
                    <Button
                        title="Botão direito"
                        onPress={() =>{alert('Right button pressed')}}
                    />
                </View>
            </View>
        <separator/>
        <separator/>
        <separator/>
    </SafeArenaView>


    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title:{
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },


});
