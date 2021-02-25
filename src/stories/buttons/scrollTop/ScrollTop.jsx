const ScrollTop = (props) => {

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return <button onClick={handleScroll} {...props}>{props.children}</button>
}

export default ScrollTop