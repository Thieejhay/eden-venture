import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ target, title, duration }) => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});

	return (
		<div className='flex-col gap-4 py-6 flex lg:w-[80%] w-full bg-[#6100c1]/80 justify-center items-center' ref={ref}>
			<CountUp
				start={0}
				end={inView ? target : 0}
				duration={duration}
				separator=','
        prefix='+'
				useEasing={true}>
				{({ countUpRef }) => (
					<span className='flex justify-center lg:text-5xl text-2xl font-medium lg:font-extrabold  text-[#E2E7E9]/90' ref={countUpRef} />
				)}
			</CountUp>
			<p
				className={`flex justify-center lg:text-lg text-sm font-normal items-center text-center text-[#E2E7E9]/80 animation delay: ${duration}s ${
					inView === true ? 'opacity-100 transform: translate3d(0, 0, 0)' : 'opacity-0 transform: translate3d(0, 1rem, 0)'
				}`}>
				{title}
			</p>
		</div>
	);
};

export default Counter;