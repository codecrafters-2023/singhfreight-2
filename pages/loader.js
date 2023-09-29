import React from 'react'
import style from '../styles/loader.module.css'

const Loader = () => {
    return (
        <>
            <div className={style.main}>
                <div className={style.loader}>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                </div>
            </div>
        </>
    )
}

export default Loader