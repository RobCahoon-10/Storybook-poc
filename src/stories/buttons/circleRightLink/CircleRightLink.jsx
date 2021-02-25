import './CircleRightLink.scss'
import { ChevronRightLink } from '../../../assets/svgIcons/SvgIcons'

/**
 * @return CircleRightLink
 */
const CircleRightLink = (props) => {

    return <span className="CircleRightLink"><ChevronRightLink /> {props.children}</span>
}

export default CircleRightLink