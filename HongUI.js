import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, TouchableHighlight} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export class HButton extends Component {
  static defaultProps = {
    LinearGradientColor: ['#00FA9A','#0f0'],
    LinearGradientStart: [0, 0],
    LinearGradientEnd: [0, 1],
    FontAwesomeName: 'bars',
    FontAwesomeSize: 25,
    FontAwesomeColor: '#fff',
    Text: '传入Text属性',
    onPress:()=>{}
  };
  state = {
    scaleSize: new Animated.Value(1),
  };
  render() {
    return (
      <View>
        <Animated.View style={{opacity: this.state.scaleSize}}>
        <TouchableHighlight style={{borderRadius:10}} onPress={()=>this.props.onPress()}>
          <LinearGradient
            colors={[
              this.props.LinearGradientColor[0],
              this.props.LinearGradientColor[1],
            ]}
            start={{
              x: this.props.LinearGradientStart[0],
              y: this.props.LinearGradientStart[1],
            }}
            end={{
              x: this.props.LinearGradientEnd[0],
              y: this.props.LinearGradientEnd[1],
            }}
            locations={[0.2, 1]}
            style={[
              styles.linearGradient,
              this.props.LinearGradientStyle
            ]}>
            <View style={styles.smallCard}>
              <FontAwesome
                name={this.props.FontAwesomeName}
                size={this.props.FontAwesomeSize}
                color={this.props.FontAwesomeColor}
              />
              <Text
                onPress={this.Press}
                style={[styles.scrollViewText, this.props.TextStyle]}>
                {this.props.Text}
              </Text>
            </View>
          </LinearGradient>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
  Press = () => {
    Animated.timing(this.state.scaleSize,{
      toValue: 0.85,
      duration: 200,
      useNativeDriver:false
    }).start()
    setTimeout(()=>{
      Animated.timing(this.state.scaleSize,{
        toValue: 1,
        duration: 200,
        useNativeDriver:false
      }).start()
    },200)
  };
}
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#ccc',
    shadowOffset: {h: 10, w: 10},
    shadowRadius: 5,
    shadowOpacity: 0.3,
    width: 200,
  },
  scrollViewText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    position: 'relative',
    left: -10,
  },
  smallCard: {
    height: 60,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  scrollInnerBox: {
    display: 'flex',
    alignItems: 'flex-end',
    // position: 'relative',
    // backgroundColor: '#fff'
  },
});
