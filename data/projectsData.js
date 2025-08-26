import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import Link from 'next/link';

export const projectsData = [
	{
		id: 1,
		title: 'Rake Build Tool',
		url: 'rake-build-tool',
		category: 'Landing home page',
		img: '/images/land-pro-1.png',
		ProjectHeader: {
			title: 'Rake Build Tool',
			publishDate: 'Aug 15, 2025',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Rake Build Tool',
				img: '/images/land-pro-1_1.png',
			},
			{
				id: uuidv4(),
				title: 'Rake Build Tool',
				img: '/images/land-pro-1_2.png',
			},
			{
				id: uuidv4(),
				title: 'Rake Build Tool',
				img: '/images/land-pro-1_3.png',
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Tailwind CSS',
						'Typescript',
						'Framer motion'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'My first challenge is to build a hero section for a landing page using Next.js, styled entirely with Tailwind CSS, and animated using Framer Motion. The section should feature a main headline and subtext that fade in and slide upward when the page loads. Alongside the text, include an image that either rotates or scales in on load or hover. As an extra touch, you can add a scroll-down indicator at the bottom of the hero section that gently bounces to guide users down the page.',
				},
				{
					id: uuidv4(),
					details:
						'Next, build a responsive navigation bar that adapts to mobile and desktop views. Use Tailwind CSS for styling, and implement a hamburger menu for mobile. When clicked, the hamburger should trigger a smooth slide-in or fade-in animation for the mobile menu using Framer Motion. The menu should close with a reverse animation. You can improve usability by highlighting the active route using Next.js useRouter hook. As an optional feature, you can include a dark mode toggle using Tailwind dark mode utilities.',
				},
				{
					id: uuidv4(),
					details:
						'The third challenge is to create a multi-section landing page where each section animates into view as the user scrolls. Use Next.js for routing and component structuring, Tailwind for styling, and Framer Motion’s useInView or whileInView hooks to trigger fade-in or slide-in animations when the sections enter the viewport. You can enhance the experience by implementing a smooth scrolling effect.',
				}
			],
			Link: 'https://rakebuildtool.vercel.app/',
		},
	},
	{
		id: 2,
		title: 'Startup landing page',
		url: 'startup-landing-page',
		category: 'Landing home page',
		img: '/images/land-pro-2.png',
		ProjectHeader: {
			title: 'Startup landing page',
			publishDate: 'Feb 15, 2025',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Startup landing page',
				img: '/images/land-pro-2_1.png',
			},
			{
				id: uuidv4(),
				title: 'Startup landing page',
				img: '/images/land-pro-2_2.png',
			},
			{
				id: uuidv4(),
				title: 'Startup landing page',
				img: '/images/land-pro-2_3.png',
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Tailwind CSS',
						'Typescript',
						'Framer motion'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Your journey begins with a striking hero section. As the page loads, let your headline rise softly into view, glowing into focus with a smooth upward motion. The subtext follows, floating gently beneath like it’s breathing with the page. An image or illustration should gracefully rotate or scale in beside it—almost like it’s being unveiled. Add a scroll-down indicator at the bottom, endlessly bouncing, hinting there’s more to discover below.',
				},
				{
					id: uuidv4(),
					details:
						'Next, craft a navigation bar that feels alive. On desktop, it stays clean and anchored. But shrink the screen, and it transforms—a hamburger icon pulses subtly, inviting interaction. Tap it, and a mobile menu animates into place, sliding or fading in with buttery smooth motion. When closed, it vanishes with elegance. Track the active route with Next.js and highlight the link in a way that subtly animates to show where the user is. If you are feeling bold, give the user a toggle to flip the site between light and dark, letting Tailwind’s dark mode wrap the UI in a sleek alternate skin.',
				},
				{
					id: uuidv4(),
					details:
						'Now, bring your landing page to life section by section. As users scroll, each content block should awaken—sliding in from the side, fading from opacity zero to full presence, or growing softly into view. Use Framer Motion’s scroll-triggered animations to let the layout respond to the user’s pace. Tailwind will help you build clean, responsive layouts, but the motion is what makes the page feel like it’s unfolding as you explore. Bonus points for a fluid, smooth-scrolling experience that feels as if the page is gliding rather than jumping.',
				}
			],
			Link: 'https://startup-landing-page-v2.vercel.app/',
		},
	},
	{
		id: 3,
		title: 'SaaS Landing page',
		url: 'saas-landing-page',
		category: 'Landing home page',
		img: '/images/land-pro-3.png',
		ProjectHeader: {
			title: 'SaaS Landing page',
			publishDate: 'Mar 15, 2025',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'SaaS Landing page',
				img: '/images/land-pro-3_1.png',
			},
			{
				id: uuidv4(),
				title: 'SaaS Landing page',
				img: '/images/land-pro-3_2.png',
			},
			{
				id: uuidv4(),
				title: 'SaaS Landing page',
				img: '/images/land-pro-3_3.png',
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Tailwind CSS',
						'Typescript',
						'Framer motion'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'My first challenge is to build a hero section for a landing page using Next.js, styled entirely with Tailwind CSS, and animated using Framer Motion. The section should feature a main headline and subtext that fade in and slide upward when the page loads. Alongside the text, include an image that either rotates or scales in on load or hover. As an extra touch, you can add a scroll-down indicator at the bottom of the hero section that gently bounces to guide users down the page.',
				},
				{
					id: uuidv4(),
					details:
						'Next, build a responsive navigation bar that adapts to mobile and desktop views. Use Tailwind CSS for styling, and implement a hamburger menu for mobile. When clicked, the hamburger should trigger a smooth slide-in or fade-in animation for the mobile menu using Framer Motion. The menu should close with a reverse animation. You can improve usability by highlighting the active route using Next.js useRouter hook. As an optional feature, you can include a dark mode toggle using Tailwind dark mode utilities.',
				},
				{
					id: uuidv4(),
					details:
						'The third challenge is to create a multi-section landing page where each section animates into view as the user scrolls. Use Next.js for routing and component structuring, Tailwind for styling, and Framer Motion’s useInView or whileInView hooks to trigger fade-in or slide-in animations when the sections enter the viewport. You can enhance the experience by implementing a smooth scrolling effect.',
				}
			],
			Link: 'https://ai-landingpage-ten.vercel.app/',
		},
	},
	{
		id: 4,
		title: 'SA Mobile Landing Page',
		url: 'sa-mobile-landing-page',
		category: 'Landing home page',
		img: '/images/land-pro-4.png',
		ProjectHeader: {
			title: 'SA Mobile Landing Page',
			publishDate: 'Jul 15, 2025',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'SA Mobile Landing Page',
				img: '/images/land-pro-4_1.png',
			},
			{
				id: uuidv4(),
				title: 'SA Mobile Landing Page',
				img: '/images/land-pro-4_2.png',
			},
			{
				id: uuidv4(),
				title: 'SA Mobile Landing Page',
				img: '/images/land-pro-4_3.png',
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Tailwind CSS',
						'Typescript',
						'Framer motion'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Imagine a mobile screen lighting up with a soft glow as your landing page hero loads. Your brand headline rises from the bottom with a gentle spring, followed by a subheading that types itself in—letter by letter—like a whisper. In the background, a vibrant illustration scales up from 80% to full size, subtly rotating or floating, making the whole screen feel alive. As the user taps or scrolls, a scroll cue bounces with playful anticipation, guiding them to the next moment.',
				},
				{
					id: uuidv4(),
					details:
						'Now shift your focus to a mobile navigation experience that feels as fluid as a native app. In the top corner, a hamburger icon pulses gently, inviting interaction. A single tap expands a full-screen mobile menu that glides in from the side or fades down with depth. Each link animates in one after another, like a list waking up. Use Framer Motion to control the entrance, exit, and staggered animation. The current route should be highlighted with a soft under-glow or a subtle scale effect—showing not just where the user is, but giving them a tactile sense of being there.',
				},
				{
					id: uuidv4(),
					details:
						'As users scroll down the mobile page, build section after section that animates into view in sync with their gestures. Each card, paragraph, or icon can slide up, fade in, or reveal with a slight delay, following the user’s rhythm. On smaller screens, these transitions should feel natural and intentional—never overwhelming. Make use of Framer Motion’s scroll-aware features to control visibility, and use Tailwind’s responsive classes to ensure perfect layout and readability on any mobile viewport.',
				}
			],
			Link: 'https://sa-tech.vercel.app/',
		},
	},
	{
		id: 5,
		title: 'Design hub Landing Page',
		url: 'design-hub-landing-page',
		category: 'Landing home page',
		img: '/images/land-pro-5.png',
		ProjectHeader: {
			title: 'Design hub Landing Page',
			publishDate: 'Apr 15, 2025',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Design hub Landing Page',
				img: '/images/land-pro-5_1.png',
			},
			{
				id: uuidv4(),
				title: 'Design hub Landing Page',
				img: '/images/land-pro-5_2.png',
			},
			{
				id: uuidv4(),
				title: 'Design hub Landing Page',
				img: '/images/land-pro-5_3.png',
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Tailwind CSS',
						'Typescript',
						'Framer motion'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Start with the hero section — the first impression. Design a mobile-first hero experience where the headline doesn’t just sit on the screen, it arrives. Think motion: the text could slide in from below or fade in letter by letter, with micro-delays for a cinematic touch. Imagine a bold image or mockup that subtly scales or floats, drawing attention without overwhelming the content. Keep your spacing generous for thumbs, and make sure the hero feels balanced between clarity and movement. Add an animated scroll cue like a soft bouncing arrow or a line that draws itself — a gesture, not just an icon.',
				},
				{
					id: uuidv4(),
					details:
						'Move to navigation. On mobile, the menu is everything. Design a hamburger icon that transforms — not just opens. Think about the transition: does the icon morph into a close icon with a rotation? Does the background blur behind the full-screen menu? Animate your menu links so they cascade in one by one or slide with a smooth staggered effect. Consider dark/light themes and how the menu adapts visually. Interaction should feel responsive and even playful — the mobile nav is often the first place motion brings brand identity to life.',
				},
				{
					id: uuidv4(),
					details:
						'Design a feature or service section using cards that react to touch. Imagine cards that lift on tap, cast subtle shadows on hover, or tilt ever so slightly with drag. Each interaction should reflect physicality — like you’re holding a living interface. Animate transitions between a collapsed card and its expanded state. Use icons that animate subtly on load or on scroll. Ensure that spacing, hierarchy, and motion guide users naturally to explore more.',
				}
			],
			Link: 'https://landing-page1-omega.vercel.app/',
		},
	},
];
