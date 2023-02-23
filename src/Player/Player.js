import { useDataValues } from '../DataLayer'
import './Player.css'
import {Sidebar} from './Sidebar'
import {Body} from './Body'
import {Footer} from './Footer'

export const Player=({spotify})=>{
    const [{user,token}]=useDataValues()
    return (
        <div className='player'>
           <div className="player-body">
               <Sidebar/>
               <Body/>
           </div>

           <Footer/>
        </div>
    )
}