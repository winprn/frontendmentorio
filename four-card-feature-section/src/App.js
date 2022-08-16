import './App.scss';
import Card from './components/Card';
import house from './images/icon-team-builder.svg';
import glass from './images/icon-supervisor.svg';
import bulb from './images/icon-karma.svg';
import screen from './images/icon-calculator.svg';

const cards = [
	{
		title: 'Supervisor',
		content: 'Monitors activity to identify project roadblocks',
		className: 'cyan single',
		icon: glass,
	},
	{
		title: 'Team Builder',
		content:
			'Scans our talent network to create the optimal team for your project',
		className: 'red double first',
		icon: house,
	},
	{
		title: 'Karma',
		content: 'Regularly evaluates out talent to ensure quality',
		className: 'orange double second',
		icon: bulb,
	},
	{
		title: 'Calculator',
		content:
			'Uses data from past projects to provide better delivery estimates',
		className: 'blue single',
		icon: screen,
	},
];

function App() {
	return (
		<div className='App'>
			<main>
				<div className='intro'>
					<h2 className='light-heading'>Reliable, efficient delivery</h2>
					<h1 className='main-heading'>Powered by Technology</h1>
					<p className='info'>
						Our Artificial Intelligence powered tools use millions of project
						data points to ensure that your project is successful
					</p>
				</div>
				<div className='grid'>
					{cards.map((card) => {
						const { title, content, className, icon } = card;
						return (
							<Card
								title={title}
								content={content}
								classes={className}
								src={icon}
							/>
						);
					})}
				</div>
			</main>
		</div>
	);
}

export default App;
