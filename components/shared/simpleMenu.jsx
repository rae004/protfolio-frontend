import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <span className="navbar-toggler-icon" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link href={"/"}>Portfolio</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href={"/portfolio/my-first-post-entry/"}>Featured project</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href={"/portfolio/my-second-post-entry/"}>About Me</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}