import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconSvgLogs() {
  return (
    <Svg viewBox="0 0 64 64" fill="black" height="25" width="25">
      <Path
        fill="none"
        stroke="black"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M16 24h22M16 34h22M16 44h22M16 54h22M12 24H8M12 34H8M12 44H8M12 54H8M14 8H1v55h44V8H32"
      />
      <Path
        fill="none"
        stroke="black"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M27 5V1h-8v4h-4l-2 8h20l-2-8zM55 1v53l4 8 4-8V1zM55 11h8"
      />
    </Svg>
  );
}

export default IconSvgLogs;
