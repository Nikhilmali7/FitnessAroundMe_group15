import { Search } from '@material-ui/icons';
import React from 'react'



class searchcomponents extends React.Component {

    render()
    {
        return(
        <div>
            <label>
            Location
                <select>
                    <option value="Kothrud">Kothrud</option>
                    <option value="Hadapsar">Hadapsar</option>
                    <option value="Pimpri">Pimpri</option>
                    <option value="khadki">khadki</option>
                </select>
            </label>
            <br></br>
            <br></br>
            <label>
            Fitness_Centers
                <select>
                    <option value="Gyms">Gyms</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Zumba">Zumba</option>
                    <option value="Swmming">Swmming</option>
                    <option value="Dance">Dance</option>
                </select>
            </label>
       </div>
    )        
    }
}

export default searchcomponents;
