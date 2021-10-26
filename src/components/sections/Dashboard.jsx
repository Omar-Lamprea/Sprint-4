import React from 'react'

export const Dashboard = () => {
    const dashboard = {
        'backgroundImage': 'url(https://cdn.pixabay.com/photo/2018/03/12/13/35/table-3219660_960_720.jpg)',
        'height': '95%',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundSize': 'cover',
    }
    const dashboardH1 = {
        color: '#000'
    }

    return (
        <>
            <div className="dashboard d-flex justify-content-center align-items-center flex-column" style={dashboard}>
                <img src="./img/logo2.png" alt="logo" />
                <h1 className="mt-3" style={dashboardH1}>CodeClean Food</h1>
            </div>
        </>
    )
}
