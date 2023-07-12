import './App.scss';
import Card from "../../Components/Card";
import {useContext} from "react";
import { StateContext } from '../../stateContext';

function App() {
    let state = useContext(StateContext);

  return (
    <div className="App">
            <div>
                <nav>
                        {state.chapters?.map((chapter, index) => (
                                <Card
                                    image={chapter.image}
                                    buttonText={'Rozpocznij'}
                                    linkTo={`/quiz-page/${index}/0`}
                                    subtitle={`Rozdział ${index+1}`}
                                    title={chapter.title}
                                    completedText={''}
                                    key={index}
                                />
                        ))}
                </nav>
            </div>

    </div>
  );
}

export default App;
