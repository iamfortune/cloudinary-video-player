import Head from "next/head";
import styles from "../styles/Home.module.css";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Video Player with Cloudinary</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<h1>Video Player</h1>
			</header>

			<main className={styles.main}>
				<section className={styles.intro}>
					<p>NOW EASILY</p>
					<h1 className={styles.title}>
						Render Your Videos with Cloudinary, <br /> And Observer Intersection
						Library.
					</h1>
				</section>
				<section className={styles.img_wrapper}>
					<img src="/assets/video.svg" alt="illustration" />
				</section>
			</main>
			<section className={styles.description}>
				<p>
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain,
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is painThere is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
				</p>
			</section>
			<section className={styles.video_player}>
				<VideoPlayer />
			</section>
		</div>
	);
};

export default Home;
