const apiURL = "http://localhost:5000/"


const apiPaths = {
    getbaseusers: apiURL + "api/users/getbaseusers"
}

export const masterCaller = {
    callfunc: async function callfunc({ ...params }) {
        const otherParams = ({ ...params }) => {
            let obj = {}
            if (params.method == "post") {
                return obj["body"] = params.body
            }
            return obj
        }
        const response = await fetch(params.url, {
            method: params.method,
            headers: params.headers,
            ...otherParams(params)
        })
        return response.json()
    },
    get: async function get({ ...params }) {
        return this.callfunc({
            url: params.url,
            method: "get",
            headers: {
                ...params.headers,
                "Content-Type": "application/json"
            }
        })
    },
    post: async function post({ ...params }) {
        return this.callfunc({
            url: params.url,
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                ...params.body
            }
        })
    },
    delete: async function remove({ ...params }) {

    },
    put: async function put({ ...params }) {

    }
}