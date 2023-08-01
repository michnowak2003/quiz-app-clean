import './App.scss';
import Card from "../../Components/Card";
import {useContext, useEffect, useState} from "react";
import { StateContext } from '../../stateContext';
import {useChaptersFromFirebase} from "../../utils/firebase";

function Home() {
    let state = useContext(StateContext);
    const localScores = JSON.parse(localStorage.getItem("scores"));

    const [fetchedData, setFetchedData] = useState(null);
    const chapters = useChaptersFromFirebase();
    useEffect(() => {
        if (chapters) {
            setFetchedData(chapters);
        }
    }, [chapters]);

    state.chapters = fetchedData;
    const checkIsCompleted = (questions, chapterId) => {
        const maxAnsweredQuestion = questions.length;
        if(localScores) {
            const chapterScore = localScores.find((chapter) => {
                return parseInt(chapter.id) === chapterId;
            });
            if (chapterScore) {
                if (chapterScore.correctAnswers === maxAnsweredQuestion) {
                    return 'Ukończone';
                } else if (chapterScore.answeredQuestion) {
                    return 'Do poprawy'
                } else {
                    return null
                }
            }
        }
    };
  return (
    <div className="App">
            <div>
                <nav>
                        {state.chapters?.map((chapter, index) => (
                                <Card
                                    chapter={chapter}
                                    buttonText={'Rozpocznij'}
                                    linkTo={`/quiz-page/${index}/0`}
                                    subtitle={`Rozdział ${index+1}`}
                                    completedText={checkIsCompleted(chapter.questions, index)}
                                    key={index}
                                    chapterId={index}
                                />
                        ))}
                </nav>
            </div>

    </div>
  );
}

export default Home;
