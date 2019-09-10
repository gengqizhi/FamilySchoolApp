import HomeNext from '../Pages/Home/HomeNext';
// import { scaleSize } from '../utils/ScreenUtil';
// import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

/**
 * 页面配置
 */
export default {
  HomeNext: { 
        screen: HomeNext,
        navigationOptions: {
            // headerStyle: {height: scaleSize(98)},
            // headerTitleStyle: {fontSize: scaleSize(36)},
            // gesturesEnabled: true,
            // header:null,
        },
        // transitionConfig: () => ({screenInterpolator: StackViewStyleInterpolator.forHorizontal}),
   },
};
