import ulv from '../icons/Footer/ulv.png';
import DiscordIcon from "../icons/Footer/Discordfooter";
import GithutIcon from "../icons/Github";
import React, { useState, useEffect } from 'react';


function Footer () {
	return (
	<footer>
		<div class="mx-auto w-full max-w-screen-xl p-4 py-10 lg:py-12">
			<div class="sm:flex sm:justify-between">
				<div class="mb-6 md:mb-0">
					<a class="flex items-center">
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevInterview</span>
					</a>
				</div>
				<div class="flex flex-cols-2  gap-[5rem] sm">
					<div>
						<h2 class="mb-5 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
						<ul class="text-gray-500 dark:text-gray-400 font-regular">
							<li class="mb-4 text-[0.81rem]">
								<a href="https://sdk.vercel.ai/" class="hover:underline">VERCEL AI SDK</a>
							</li>
							<li class="text-[0.81rem]">
								<a href="" class="hover:underline">Otros</a>
							</li>
						</ul>
					</div>
					<div class="flex flex-col gap-[0.7rem] w-[105px] h-auto">
						<div class="flex items-center justify-between w-full">
							<h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{ whiteSpace: 'nowrap' }}>Follow us</h2>
							<GithutIcon className="size-5" />
						</div>
						<ul class="text-gray-500 dark:text-gray-400 font-regular text-sm">
							<li class="mb-1">
								<a href="https://github.com/mvnueloc" class="hover:underline">mvnueloc</a>
							</li>
							<li class="mb-1">
								<a href="https://github.com/danielctecla" class="hover:underline">danieltecla</a>
							</li>
							<li>
								<a href="https://github.com/Antxnszn" class="hover:underline">Antxnszn</a>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
			<hr className="border-gray-200 dark:border-gray-700" style={{ margin: '2rem 0' }} />
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div className="text-sm text-gray-500 dark:text-gray-400">© 2024 <a>Una linea a la vez.</a></div>
				<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
					
					<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center">
						<DiscordIcon className="size-6" />
						<div className="sr-only">Discord account</div>
					</a>
					<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center">
						<img src={ulv} className="h-6" alt="LogoUnaLineaALaVez" />
						<div className="sr-only">Una linea a la vez logo</div>
					</a>
				</div>
			</div>
		</div>
	</footer>
	)
};

export default Footer;
