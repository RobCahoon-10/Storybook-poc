import ReactHtmlParser from 'react-html-parser'

const RichText = ({data}) => {
    if(data) {
        return ReactHtmlParser(data)
    } else {
        return null
    }
}

export default RichText
