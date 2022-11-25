import { Container } from './App.styled';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Buttons from './Buttons/Buttons';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
	const onLeaveFeedback = event => {
		switch (event) {
			case 'good':
				setGood(prevState => prevState + 1);
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'bad':
				setBad(prevState => prevState + 1);
				break;
			default:
				console.log('Error');
				break;
		}

  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
 const countPositiveFeedbackPercentage = () => {
   return Math.round((good / countTotalFeedback()) * 100);
 };


    return (
      <Container>
        <Section title="Please, leave your feedback">
          <Buttons
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }

