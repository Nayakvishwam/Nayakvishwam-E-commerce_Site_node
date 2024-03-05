const CheckValidPayload = ({ ...params }) => {
    const comparepayload = params.comparepayload
    const ValidateArray = Object.keys(params.bodypayload).map(response => comparepayload.hasOwnProperty(response))
    if (ValidateArray.includes(false)) {
        return false
    }
    else {
        return true
    }
}

const CheckValidObject = (obj, value) => {
    if (Object.values(obj).includes(value)) {
        return false
    }
    return true
}

exports.Functions = {
    CheckValidPayload: CheckValidPayload,
    CheckValidObject: CheckValidObject
}