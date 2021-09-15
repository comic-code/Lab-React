# :atom_symbol: Animações no React Native

## :robot: Índice

- 1 - [Animated](#01)
- 2 - [Reanimated 2](#02)
- 3 - [LottieFiles](#03)

****

## <a name="01">Básico</a>

Não temos animações de forma nativa no RN para trabalhar com os estilos, apenas com CSS, igual na WEB.


```jsx
const { current: opacity } = useRef(new Animated.Value(0));

function show() {
  Animated.timing(opacity, {
    toValue: 1,
    useNativeDriver: true, // Evita problemas de performance
    duration: 100 // Milissegundos, valor padrão 1000
  }).start();
}

<Animated.View style={{ 
  width: 150,
  height: 150,
  borderRadius: 5,
  marginBottom: 10,
  backgroundColor: 'red',
  opacity
} />
```

> É aconselhado utilizar useRef no lugar de estados pois a tela não é atualizada.

Animated consegue resolver muita coisa simples, porém é tudo manual, com valores exatos.  

### Para ficar de olho:

- React Native Animatable
- React Native Motion

## <a name="02">Reanimated 2</a>

Reanimated nos ajuda a deixar as coisas um pouco menos manual.

```console
yarn add react-native-reanimated@next
```

É necessário também adicionar um plugin no babel.config.js
```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
++  'react-native-reanimated/plugin',
  ],
};
```
> Para os próximos procedimentos:  
> https://docs.swmansion.com/react-native-reanimated/docs/installation/

****

O useSharedValue ocupará o lugar do ref, por ter um melhor controle de threads e por facilitar as animações.

```js
const offset = useSharedValue(0);

  const customStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: offset.value
      }
    ]
  }))

  function moveUp() {
    offset.value = withSpring(-50); //Efeito "mola"
  }
```


## <a name="03">LottieFiles</a>

O Lottie é uma biblioteca do airbnb, são animações fora do código, geralmente feita no after effects.
>https://github.com/lottie-react-native/lottie-react-native  

```
yarn add lottie-react-native
yarn add lottie-ios@3.1.8
```

Para prosseguir com a instalação verifique o passo a passo na documentação.

Para usarmos no RN é necessário baixar as animações no formato JSON
>https://lottiefiles.com/

```js
import LottieView from 'lottie-react-native';
...
const animationRef = useRef(null);
function start() {
  animationRef.current.play();
}

<LottieView source={Glitch} 
  // autoPlay
  ref={{animationRef}}
  loop
/>
```
> Também é possível