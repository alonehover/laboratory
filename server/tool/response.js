const Response = (data="", code=1, msg="success") => {
    return {
        code,
        data,
        msg
    }
}

export default Response