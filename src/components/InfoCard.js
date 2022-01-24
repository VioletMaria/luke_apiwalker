import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const InfoCard = props => {
    const [info, setInfo] = useState([{}]);
    const {option, id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${option}/${id}`)
            .then(response => {
                setInfo(response.data)
            })
            .catch(err => {setInfo("")})
    },[option, id])

    return (
        <div>
            {
            info.length <= 0 ?
            <div>
            <h1>These aren't the droids you're looking for</h1>
            <img src="https://www.desktopbackground.org/p/2015/09/13/1010594_obi-wan-kenobi-episode-3-wallpaper_1488x1265_h.jpg" alt="obi"></img>
            </div>
            : 
            option === "people" ?
            <div>
                <h1>{info.name}</h1>
                <p><b>Height:</b>{info.height}</p>
                <p><b>Mass:</b>{info.mass}</p>
                <p><b>Hair Color:</b>{info.hair_color}</p>
                <p><b>Skin Color:</b>{info.skin_color}</p>
            </div>
            :
            option === "planets" ?
            <div>
                <h1>{info.name}</h1>
                <p><b>Climate:</b>{info.climate}</p>
                <p><b>Terrain:</b>{info.terrain}</p>
                <p><b>Surface Water:</b>{info.surface_water}</p>
                <p><b>Rotation Period:</b>{info.rotation_period}</p>
            </div>
            :
            option === "starships" ?
            <div>
                <h1>{info.name}</h1>
                <p><b>Model:</b>{info.model}</p>
                <p><b>Manufacturer:</b>{info.manufacturer}</p>
                <p><b>Cost in Credits:</b>{info.cost_in_credits}</p>
                <p><b>Length: </b>{info.length}</p>
                <p><b>Max Atmoshpering Speed: </b>{info.max_atmosphering_speed}</p>
            </div> 
            :
            option === "films" ?
            <div>
                <h1>{info.title}</h1>
                <p><b>Director:</b>{info.director}</p>
                <p><b>Producer:</b>{info.producer}</p>
                <p><b>Release Date:</b>{info.release_date}</p>
            </div>
            :
            option === "vehicles" ?
            <div>
                <h1>{info.name}</h1>                        
                <p><b>Model:</b>{info.model}</p>
                <p><b>Manufacturer:</b>{info.manufacturer}</p>
                <p><b>Cost In Credits:</b>{info.cost_in_credits}</p>
                <p><b>Length:</b>{info.length}</p>
                <p><b>Max Atmospheric Speed:</b>{info.max_atmosphering_speed}</p>
            </div>
            :
            option === "species" ?
            <div>
                <h1>{info.name}</h1>
                <p><b>Classification: </b>{info.classification}</p>
                <p><b>Average Height: </b>{info.average_height}</p>
                <p><b>Language: </b>{info.language}</p>
                <p><b>Skin Colors: </b>{info.skin_colors}</p>
            </div>
            : ""
            }
        </div>
    )
}

export default InfoCard;