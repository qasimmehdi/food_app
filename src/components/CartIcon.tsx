import React, {FC} from 'react';
import Svg, {G, Path} from 'react-native-svg';

const CartIcon: FC = props => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G
        opacity={0.3}
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </G>
    </Svg>
  );
};

export default CartIcon;
