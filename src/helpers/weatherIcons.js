import Clear from '../assests/Clear.svg'
import Clouds from '../assests/Clouds.svg'
import Drizzle from '../assests/Drizzle.svg'
import Other from '../assests/Other.svg'
import Rain from '../assests/Rain.svg'
import Snow from '../assests/Snow.svg'
import ThunderStorm from '../assests/ThunderStorm.svg'
import Tornado from '../assests/Tornado.svg'


const getIcon = (iconName) => {
    const allIcons = {
        Clear: Clear,
        Clouds: Clouds,
        Drizzle: Drizzle,
        Other: Other,
        Rain: Rain,
        Snow: Snow,
        ThunderStorm: ThunderStorm,
        Tornado: Tornado
    }

    return allIcons[iconName] ? allIcons[iconName] : allIcons.Other
}


export default getIcon