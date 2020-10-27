import React from 'react';
import "./page404.module.scss";

const Page404 = () => {

    return (
        <div className="text-center">
            <img src={process.env.PUBLIC_URL +'/img/404.gif'} alt="Page not found" />
        </div>
    );
}

export default Page404;