import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"



const fetchAds = async(query, offset) => {
    let http = await fetch(`http://localhost:4000/ads/search?q=${query}&o=${offset}`);
    let response = await http.json();
    return response
}

const SearchPage = () => {
    const [params] = useSearchParams()
    const [connection, setConnection] = useState(0)
    const [ads, setAds] = useState({
        offset: 0,
        limit: 9,
        data: null
    });
    const mapItem = ads.data?.map((ad) => {
        return(
            <CardItem key={ad._id} data={ad} />
        )
    })

    useEffect(()=>{
        const runAsync = async() => {
            setConnection(1)
            let data = await fetchAds(params.get("q"),ads.offset);
            setAds({...ads, data})
            setConnection(0)
        }
        runAsync();
    },[params])

    if(connection != 0){
        return(
            <div>Loading...</div>
        )
    }
    if(ads.data?.length == 0){
        return(
            <div>No ads found</div>
        )
    }
    return(
        <div className="d-flex justify-content-start flex-wrap">
            {mapItem}
        </div>
    )
}

const CardItem = ({data}) => {
    return(
        <div>
            <div className="card m-2" style={{maxWidth: "360px", width: "100%"}}>
                <div className="px-3">
                    <span className="badge bg-secondary">{data?.company?.name}</span>
                </div>
                <div className="p-3">{data.primaryText}</div>
                <img src={data.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.headline}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data?.company?.url} target="_blank" rel="noreferrer" className="btn btn-primary">{data.CTA}</a>
                </div>
            </div>
        </div>
    )
}

export default SearchPage