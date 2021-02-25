import './ChevronButton.scss'
import { ChevronRightWithPurpleAngle } from '../../../assets/svgIcons/SvgIcons'

/**
 * @param {string} border true/false
 * @param {string} background ChevronButton-'defined_class_name' (ex : Purple)
 * Ex usage : <ChevronButton border="true" background="Purple">{link.linkText}</ChevronButton>
 * @return ChevronButton
 */
const ChevronButton = (props) => {

    const {border, background, ...rest} = props;

    return (
        <span className={`ChevronButton ${border ? 'ChevronButton-Border' : ''} ${background ? 'ChevronButton-'+ background : ''}`} {...rest}>
            {props.children}
            <ChevronRightWithPurpleAngle />
        </span>
    )
}

export default ChevronButton