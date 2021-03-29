import { useEffect, useState } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const VideoPlayer = () => {
	const [play, setPlay] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0,
	});

	useEffect(() => {
		inView ? setPlay(true) : setPlay(false);
	}, [inView, ref]);

	return (
		<CloudinaryContext cloud_name="codedog">
			<div ref={ref}>
				<Video
					publicId="videoplayer-demo"
					width="100%"
					controls
					autoPlay={play}
				/>
			</div>
		</CloudinaryContext>
	);
};

export default VideoPlayer;
