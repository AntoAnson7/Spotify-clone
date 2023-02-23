import './Footer.css'
import arctic from '../images/arctic.jpeg'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';


import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';

import MicIcon from '@mui/icons-material/Mic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeMuteOutlinedIcon from '@mui/icons-material/VolumeMuteOutlined';
import { Speaker } from '@mui/icons-material';



export const Footer=()=>{
    return (
        <div className="footer">
                <div className="footer-left">
                    <img src={arctic} alt="" />
                    <div className='info'>
                        <p className='song'>I Wanna Be Yours</p>
                        <p className='artist'>Arctic Monkeys</p>
                    </div>
                    <FavoriteBorderIcon sx={{ fontSize: "25px",color:"gray"}}/>
                    <PictureInPictureAltIcon sx={{ fontSize: "25px",color:"gray"}}/>
                    {/* pip */}
                </div>

                <div className="footer-center">
                    <div className="footer-center-top">
                        <ShuffleIcon sx={{ fontSize: "30px",color:"gray"}}/>
                        <SkipPreviousIcon sx={{ fontSize: "30px" ,color:"gray"}}/>
                        <PlayCircleIcon className='hov' sx={{ fontSize: "40px"}}/>
                        <SkipNextIcon sx={{ fontSize: "30px" ,color:"gray"}}/>
                        <RepeatIcon sx={{ fontSize: "30px" ,color:"gray"}}/>
                    </div>
                    <div className="footer-center-bottom">
                        <hr />
                    </div>
                </div>

                <div className="footer-right">
                    <MicIcon />
                    <QueueMusicIcon/>
                    <PhonelinkIcon/>
                    <VolumeUpOutlinedIcon/>
                    <hr />
                </div>

            </div>
    )
}