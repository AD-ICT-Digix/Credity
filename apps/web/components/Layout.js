import Link from 'next/link';
import { useRouter } from 'next/router';

export const Layout = ({ children }) => {
	const router = useRouter();
	const menuItems = [
		{
			href: '/',
			title: 'Homepage',
		},
	];

	return (
		<div className='min-h-screen flex flex-col'>
			<header className='bg-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
				Credity
			</header>
			<div className='flex flex-col md:flex-row flex-1' >
				<aside className='bg-black-500 w-full md:w-60 '>
					<nav>
						<ul>
							{menuItems.map(({ href, title }) => (
								<li className='m-2' key={title}>
									<Link href={href}
										className={`flex p-2 bg-black-200 rounded hover:bg-indigo-400 cursor-pointer ${router.asPath === href && 'bg-indigo-600 text-white'
											}`}
									>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</aside>
				<main className='flex-1'>{children}</main>
			</div>
		</div>
	);
}