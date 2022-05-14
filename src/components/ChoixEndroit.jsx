import useFetch from './hooks/useFetch'
const ChoixEndroit = () => {
    const { datas, isPending, err } = useFetch('http://localhost:3001/endroit')

    return (
        <div className="">
            {datas &&
                datas.map((data)=>(
                    <div className="" key={data.id}>{data.nom}</div>
                ))
            }
            {isPending}
        </div>
    );
}

export default ChoixEndroit;