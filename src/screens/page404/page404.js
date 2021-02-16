import React from 'react';
import "./page404.scss";

const Page404 = () => {

    return (
        <div className="text-center vertical-center">
            <img src={process.env.PUBLIC_URL +'/img/404.gif'} alt="Page not found" />
        </div>
    );
}

export default Page404;