import style from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <section>
                <div>
                    <div className={style.videoContainer}>
                        <video autoPlay loop muted className={style.video}>
                            <source src='/videos/video.mp4' type="video/mp4" />
                        </video>
                        <div className={style.overlay}></div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <p>
                        
                    </p>
                </div>
            </section>
        </>
    );
}
