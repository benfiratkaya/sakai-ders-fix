import { useRouter } from 'next/router';
import Layout from "../../components/Layout";
import {data} from "../../utils/data";
import {useRef} from "react";

const Lesson = () => {
  const router = useRouter();
  const { id } = router.query;
  const lessons = data.map(course => course.lessons).flat(1);
  let lessonData = lessons.filter(lesson => lesson.id === id);
  const audioEl = useRef(null);
  
  if (lessonData.length === 0) return "Ders bulunamadı!";
  lessonData = lessonData[0];
  
  const handleOnPlay = (video) => {
    console.log('play');
    const audio = audioEl.current;
    if (video.currentTime < lessonData.delay) {
      setTimeout(function() {
        audio.play();
      }, (lessonData.delay - video.currentTime) * 1000);
    } else {
      audio.play();
      audio.currentTime = video.currentTime - lessonData.delay;
    }
  }
  const handleOnPause = () => {
    console.log('pause');
    audioEl.current.pause();
  }
  return (
    <Layout>
      <video
        id="video"
        controls
        className="w-100"
        onPlay={(e) => handleOnPlay(e.target)}
        onPause={handleOnPause}
      >
        <source src={lessonData.video} type="video/webm" />
      </video>
      <audio id="audio" ref={audioEl}>
        <source src={lessonData.audio} type="audio/mpeg" />
      </audio>
    </Layout>
  );
};

export default Lesson;
