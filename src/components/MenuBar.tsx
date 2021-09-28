import '../style.css';
import {useState, useEffect} from 'react';

export default function MenuBar() {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");



    const currentClock = () => {
        const date = new Date();

        setHours(String(date.getHours()).padStart(2, "0"));
        setMinutes(String(date.getMinutes()).padStart(2, "0"));
        setSeconds(String(date.getSeconds()).padStart(2, "0"));

        // const hours = String(date.getHours()).padStart(2, "0");
        // const minutes = String(date.getMinutes()).padStart(2, "0");
        // const seconds = String(date.getSeconds()).padStart(2, "0");
    }

    // const menuBtnChange = () => {
    //     if (sidebar.classList.contains("open")) {
    //       closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    //     } else {
    //       closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    //     }
    //   }


    useEffect(()=>{
        currentClock();
        const clock= setInterval(currentClock, 1000); //이용해야하고, 이것밖에 없을때 어쩔 수없이 추가로..
        return clearInterval(clock);
    }, []);

    //     let sidebar = document.querySelector(".sidebar");
    //   let closeBtn = document.querySelector("#btn");
    //   let searchBtn = document.querySelector(".bx-search");

    //   closeBtn.addEventListener("click", () => {
    //     sidebar.classList.toggle("open");
    //     menuBtnChange(); //calling the function(optional)
    //   });

    //   searchBtn.addEventListener("click", () => {
    //     // Sidebar open when you click on the search iocn
    //     sidebar.classList.toggle("open");
    //     menuBtnChange(); //calling the function(optional)
    //   });

    //   // following are the code to change sidebar button(optional)
    //   const openDetailMenu = () => {
    //     sidebar.classList.toggle("open");
    //     menuBtnChange(); //calling the function(optional)
    //   }


    return(
        <div className="sidebar">
            <div className="logo-details">
                <i className="bx bxl-c-plus-plus icon"></i>
                <div className="logo_name">DKUCIS</div>
                <i className="bx bx-menu" id="btn"></i>    {/* onClick = {} */}
            </div>
            <ul className="nav-list">
                <li>
                    <a href="#">
                        <i className='bx bx-mail-send' ></i>
                        <span className="links_name">Mail</span>
                    </a>
                    <span className="tooltip">Mail</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-star' ></i>
                        <span className="links_name">Important Mail</span>
                    </a>
                    <span className="tooltip">Important Mail</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog"></i>
                        <span className="links_name">Setting</span>
                    </a>
                    <span className="tooltip">Setting</span>
                </li>
        
                <li>
                    <a href="#">
                        <i className='bx bx-time' ></i>
                        <span id = "clock" className="links_name">{hours}:{minutes}:{seconds}</span>
                    </a>
                    <span id = "clock" className="tooltip">Current Time</span>
                    
                </li>
                <li className="profile">
                    <div className="profile-details">
                        <img src="profile.jpg" alt="profileImg" />
                        <div className="name_job">
                            <div className="name">홍길동</div>
                            <div className="id">ID</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out"></i>
                </li>
                    
                <li className="profile">
                    <div className="profile-details">
                        <img src="profile.jpg" alt="profileImg" />
                        <div className="name_job">
                            <div className="name">홍길동</div>
                            <div className="id">ID</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out"></i>
                </li>
            </ul>
      </div>
    );
}
