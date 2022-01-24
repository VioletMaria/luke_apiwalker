import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const InfoForm = props => {
    const history = useHistory();
    const [options, setOptions] = useState([]);
    const [formInfo, setFormInfo] = useState({
        option: "people",
        id: ""
    })
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                setOptions(Object.keys(response.data))
            })
            .catch(err=>setFormInfo(""));
    }, [])
    
    const onChangeHandler = (event) => {
        setFormInfo({...formInfo, [event.target.name]: event.target.value})
    }
    
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push(`/${formInfo.option}/${formInfo.id}`);
    }

    return (
        <div>
            <form onSubmit={ onSubmitHandler }>
                <select onChange={onChangeHandler} name="option">
                    {
                        options.map((option, i) => {
                            return <option key={i} value={option}>{option}</option>
                        })
                    }
                </select>
                <label>ID: </label>
                <input onChange={onChangeHandler} type="number" name="id"/>
                <input type="submit" value="Find"/>
            </form>
        </div>
    )
}

export default InfoForm;