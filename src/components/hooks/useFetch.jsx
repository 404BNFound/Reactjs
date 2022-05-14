import { useState } from 'react'
import { useEffect } from 'react'

const useFetch = (url) => {
    const [datas, setDatas] = useState([])
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    return res.json()
                }).then(data => {
                    setErr(null)
                    // setDatas(data)
                    setDatas(data)
                    setIsPending(false)
                    console.log(data)
                })
                .catch((err) => {
                    setDatas(null)
                    setErr(err.message)
                    setIsPending(false)
                })
        }, 500)
    }, [url])
    return { datas, isPending, err }
}
export default useFetch