import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
          source={icons.heartOutline}
          resizeMode='contain'
          style={style.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
      <Text>Footer</Text>
    </View>
  )
}

export default Footer