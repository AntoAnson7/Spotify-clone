import './Sidebar.css'
import logo from '../images/spoti.png'
import { SidebarOption } from './SidebarOption'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';

export const Sidebar=()=>{
    return (
        <div className='sidebar'>
            <img src={logo} alt="" />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={VideoLibraryIcon}/>
            
            <br />
            <strong className='sidebar-title'>Playlists</strong>
            <hr />
            <SidebarOption title="Hindi Top"/>
            <SidebarOption title="Chil-Lofi"/>
            <SidebarOption title="Trending Now"/>
        </div>
    )
}
