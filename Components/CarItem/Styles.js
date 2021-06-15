
import { StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
        height:  Dimensions.get('window').height,
        width: '100%'
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
        position: 'relative'
      },
      title: {
        fontSize: 40,
        fontWeight: 600
      },
      subtitle: {
        color: '#5c5e62',
        fontSize: 16
      },
      image: {
        height:'100%',
        width: '100%',
        resizeMode: 'cover',
        position:'absolute'
      },
      buttonsContainer: {
          position: 'absolute',
          bottom: 60,
          width: '100%'
      },
      subtitleCTA: {
          paddingLeft: 4,
          textDecorationLine: 'underline'
      }
})

export default styles;  
