import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuIcon: FC = props => {
  return (
    <Svg width={25} height={17} viewBox="0 0 25 17" fill="none" {...props}>
      <Path
        d="M1.599 8.333H13.5M1.599 1h22m-22 14.667h22"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MenuIcon;
