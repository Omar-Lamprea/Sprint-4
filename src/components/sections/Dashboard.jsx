import React from 'react'

export const Dashboard = () => {
    const dashboard = {
        // 'backgroundImage': 'url(https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_960_720.jpg)',
        'height': '95%',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundSize': 'cover',
    }

    return (
        <>
            <div className="dashboard d-flex justify-content-center align-items-center flex-column" style={dashboard}>
                <img src="./img/logo2.png" alt="logo" />
                <h1 className="mt-3">CodeClean Food</h1>
            </div>
        </>
    )
}
