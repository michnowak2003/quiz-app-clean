export const validatePoints = (state, chapterId) => {
    let score = 0;
    state.chapters[chapterId].questions.forEach(question => {
        if(question.selectedAnswer === question.correctAnswer) {
            score++;
        }
    })
    return score;
}

export const resetAnswers = (state, chapterId) => {
    state.chapters[chapterId].questions.forEach(question => {
        question.selectedAnswer = null;
        question.showAnswer = false;
    })
}

export const showAnswers = (state, chapterId) => {
    state.chapters[chapterId].questions.forEach(question => {
        question.showAnswer = true;
    })
}