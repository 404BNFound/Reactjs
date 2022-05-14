import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './assets/css/Nav.css'
import useWindowSize from "./hooks/useWindowSize";

const Nav = () => {
    const [openedLeftMenu, setOpenedLeftMenu] = useState(false);
    const [openedRightMenu, setOpenedRightMenu] = useState(false);

    const maxNavWidth = 1450;
    const { width } = useWindowSize();
    const SimpleButton = ({ text }) => {
        return (
            <Button variant="text" sx={{
                fontFamily: "Work Sans",
                fontSize: "17px",
                color: 'black',
                textTransform: 'none',
            }
            }>
                {text}
            </Button >
        );
    }
    const AppBarButton = () => {
        return (
            <Button variant="text" sx={{
                fontFamily: "Work Sans",
                fontSize: "17px",
                color: 'black',
                textTransform: 'none',
            }
            }>
                <i style={{ fontSize: '40px' }} className="fa-solid fa-bars"></i>
            </Button >
        );
    }

    const UsersButton = () => {
        return (
            <Button variant="text" sx={{
                fontFamily: "Work Sans",
                fontSize: "17px",
                color: 'black',
                textTransform: 'none',
            }
            }>
                <i style={{ fontSize: '40px' }} className="fa-solid fa-users"></i>
            </Button >
        );
    }
    const toggleLeftMenu = () => {
        setOpenedLeftMenu(!openedLeftMenu)
    }
    const toggleRightMenu = () => {
        setOpenedRightMenu(!openedRightMenu)
    }
    useEffect(() => {
        console.log(`openedLeftMenu : ${openedLeftMenu}`)
    }, [openedLeftMenu])
    useEffect(() => {
        console.log(`openedLeftMenu : ${openedRightMenu}`)
    }, [openedRightMenu])
    return (
        <>
            {/* {(openedRightMenu || openedLeftMenu) &&
                <div className="fullScreen" onClick={() => {
                    setOpenedLeftMenu(false)
                    setOpenedRightMenu(false)
                }}>
                </div>
            } */}
            <div className="nav">
                <div className="navLeft">
                    {width > maxNavWidth &&
                        <>
                            <div className="logo">
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <SimpleButton text={"Logo"} className="menu1"></SimpleButton>
                                </Link>
                            </div>
                            <div>
                                <SimpleButton text={"Menu1"}></SimpleButton>
                            </div>
                            <div>
                                <SimpleButton text={"Menu2"}></SimpleButton>
                            </div>
                        </>
                    }
                    {width < maxNavWidth &&
                        <div className="toggleLeftMenu" onClick={() => {
                            toggleLeftMenu()
                        }}>
                            <AppBarButton />
                        </div>
                    }
                    { }
                </div>
                <div className="navCenter">
                    <div className="normalCenter">
                        <SimpleButton text={""}></SimpleButton>
                    </div>
                </div>

                <div className="navRight">
                    {width < maxNavWidth &&
                        <div className="toggleRightMenu" onClick={() => {
                            toggleRightMenu()
                        }}>
                            <div>
                                <UsersButton />
                            </div>
                        </div>
                    }
                    {width > maxNavWidth &&
                        <div className="normalRight">
                            <div>
                                <SimpleButton text={'Login'} className="r1"></SimpleButton>
                            </div>
                            <div>
                                <SimpleButton text={"Signup"} className="r3"></SimpleButton>
                            </div>
                            <div className="abc">
                                <SimpleButton text={"Logout"}></SimpleButton>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Nav;