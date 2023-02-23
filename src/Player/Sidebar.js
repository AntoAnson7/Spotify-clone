import './Sidebar.css'
import logo from '../images/spoti.png'
import { SidebarOption } from './SidebarOption'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import { useDataValues } from '../DataLayer'
import { useContext } from 'react';

export const Sidebar=()=>{
    const [{playlists}]=useDataValues()
    return (
        <div className='sidebar'>
            <img src={logo} alt="" />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={VideoLibraryIcon}/>
            
            <br />
            <strong className='sidebar-title'>Playlists</strong>
            <hr />
            {playlists.items?.map((item)=>(
                <SidebarOption title={item?.name}/>
            ))}
        </div>
    )
}
