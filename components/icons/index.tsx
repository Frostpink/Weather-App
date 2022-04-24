/** @format */

import { Svg1 as Icon1 } from './1'
import { Svg2 as Icon2 } from './2'
import { Svg3 as Icon3 } from './3'
import { Svg4 as Icon4 } from './4'
import { Svg5 as Icon5 } from './5'
import { Svg6 as Icon6 } from './6'
import { Svg7 as Icon7 } from './7'
import { Svg8 as Icon8 } from './8'
import { Svg11 as Icon11 } from './11'
import { Svg12 as Icon12 } from './12'
import { Svg13 as Icon13 } from './13'
import { Svg14 as Icon14 } from './14'
import { Svg15 as Icon15 } from './15'
import { Svg16 as Icon16 } from './16'
import { Svg17 as Icon17 } from './17'
import { Svg18 as Icon18 } from './18'
import { Svg19 as Icon19 } from './19'
import { Svg20 as Icon20 } from './20'
import { Svg21 as Icon21 } from './21'
import { Svg22 as Icon22 } from './22'
import { Svg23 as Icon23 } from './23'
import { Svg24 as Icon24 } from './24'
import { Svg25 as Icon25 } from './25'
import { Svg26 as Icon26 } from './26'
import { Svg29 as Icon29 } from './29'
import { Svg32 as Icon32 } from './32'
import { Svg33 as Icon33 } from './33'
import { Svg34 as Icon34 } from './34'
import { Svg35 as Icon35 } from './35'
import { Svg36 as Icon36 } from './36'
import { Svg37 as Icon37 } from './37'
import { Svg38 as Icon38 } from './38'
import { Svg39 as Icon39 } from './39'
import { Svg40 as Icon40 } from './40'
import { Svg41 as Icon41 } from './41'
import { Svg42 as Icon42 } from './42'
import { Svg43 as Icon43 } from './43'
import { Svg44 as Icon44 } from './44'

export { default as SearchIcon } from './searchIcon'

export const WeatherIcons = ({
    iconNumber,
    className,
}: {
    iconNumber: number
    className: string
}): JSX.Element => {
    let Icon: JSX.Element
    switch (iconNumber) {
        case 1:
            Icon = <Icon1 className={className} />
            break
        case 2:
            Icon = <Icon2 className={className} />
            break
        case 3:
            Icon = <Icon3 className={className} />
            break
        case 4:
            Icon = <Icon4 className={className} />
            break
        case 5:
            Icon = <Icon5 className={className} />
            break
        case 6:
            Icon = <Icon6 className={className} />
            break
        case 7:
            Icon = <Icon7 className={className} />
            break
        case 8:
            Icon = <Icon8 className={className} />
            break
        case 11:
            Icon = <Icon11 className={className} />
            break
        case 12:
            Icon = <Icon12 className={className} />
            break
        case 13:
            Icon = <Icon13 className={className} />
            break
        case 14:
            Icon = <Icon14 className={className} />
            break
        case 15:
            Icon = <Icon15 className={className} />
            break
        case 16:
            Icon = <Icon16 className={className} />
            break
        case 17:
            Icon = <Icon17 className={className} />
            break
        case 18:
            Icon = <Icon18 className={className} />
            break
        case 19:
            Icon = <Icon19 className={className} />
            break
        case 20:
            Icon = <Icon20 className={className} />
            break
        case 21:
            Icon = <Icon21 className={className} />
            break
        case 22:
            Icon = <Icon22 className={className} />
            break
        case 23:
            Icon = <Icon23 className={className} />
            break
        case 24:
            Icon = <Icon24 className={className} />
            break
        case 25:
            Icon = <Icon25 className={className} />
            break
        case 26:
            Icon = <Icon26 className={className} />
            break
        case 29:
            Icon = <Icon29 className={className} />
            break
        case 32:
            Icon = <Icon32 className={className} />
            break
        case 33:
            Icon = <Icon33 className={className} />
            break
        case 34:
            Icon = <Icon34 className={className} />
            break
        case 35:
            Icon = <Icon35 className={className} />
            break
        case 36:
            Icon = <Icon36 className={className} />
            break
        case 37:
            Icon = <Icon37 className={className} />
            break
        case 38:
            Icon = <Icon38 className={className} />
            break
        case 39:
            Icon = <Icon39 className={className} />
            break
        case 40:
            Icon = <Icon40 className={className} />
            break
        case 41:
            Icon = <Icon41 className={className} />
            break
        case 42:
            Icon = <Icon42 className={className} />
            break
        case 43:
            Icon = <Icon43 className={className} />
            break
        case 44:
            Icon = <Icon44 className={className} />
            break
        default:
            Icon = <Icon1 className={className} />
    }
    return Icon
}

export default WeatherIcons
