"# hongui" 
```js
npm i hongui -S
```
安装包后，导入包，导出HButton组件
```js
import {HButton} from 'hongui/HongUI.js';
```
属性：（皆非必传）
**`LinearGradientColor`** : 渐变的颜色，暂支持两个颜色，默认`['#00FA9A','#0f0']` 
实例：`LinearGradientStart={[0, 1]}`
**`LinearGradientStyle`**:容器的样式设置 默认为空{}
**`LinearGradientStart`,`LinearGradientEnd`** 渐变颜色的方向 默认 `[0, 0][0, 1]`意为垂直方向，水平为`[0, 1][1, 1]`,也可倾斜，可根据需要调节
示例：
```js
            LinearGradientStart={[0,1]}
            LinearGradientEnd={[1,0]}
```
**`FontAwesomeName`**:图标的名字，这里使用的图标是[Font Awesome](http://www.fontawesome.com.cn/faicons/)这里传的name是![在这里插入图片描述](https://img-blog.csdnimg.cn/20200510090915978.png)
不带前面的fa-标记，如要使用别的图标库可以在源码里更改图标库的地址，比如要使用ionic icon(图标)可以如下即可
当然使用图标,需要项目中`react-native-vector-icons`可以正常使用
还有因为用到了渐变所以要事先安装react-native-linear-gradient，安装完项目应该是需要重新启动才好使的，否则有报错，react native0.6版本后不需要手动link，只要安装到项目中就可以了
```js
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//更改为
import FontAwesome from 'react-native-vector-icons/Ionicons';
```

**`FontAwesomeSize`**:字体图标的大小 默认25

**`FontAwesomeColor`** : 字体图标的颜色 默认白色

**`Text`** ：** 需要传入的文字

**`TextStyle`** : 传入文字的样式
