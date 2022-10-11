import './Main.scss'
import { data } from '../../helper/data'
import Card from './Card'

const App = () => {
    // console.log(data);
    return(
        <div className="card-container">
           {data.map((item, index)=> <Card {...item
           } key={...}/>
           )}
        </div>
    )
}