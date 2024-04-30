import React from "react";
import Title from "../Title/Title";
import bg from "../../images/contact-bg.jpg";
import { Button, Input, Textarea } from "@nextui-org/react";
const Contact = () => {
	return (
		<>
			{/* <!-- Container for demo purpose --> */}
			<div className="container my-24 mx-auto px-6 md:px-0">
				{/* <!-- Section: Design Block --> */}
				<section className="mb-32">
					<Title text="Contact Us" />
					<div
						className={`relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat`}
						style={{ background: `url(${bg})` }}
					></div>
					<div className="container px-6 md:px-12">
						<div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
							<div className="flex flex-wrap">
								<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
									<form>
										<div className="relative mb-6" data-te-Input-wrapper-init>
											<Input
												label="Name"
												type="text"
												id="exampleInput90"
												isClearable
												className="min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
												radius="none"
											/>
										</div>
										<div className="relative mb-6" data-te-Input-wrapper-init>
											<Input
												label="Email"
												type="email"
												id="exampleInput91"
												isClearable
												className="min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
												radius="none"
											/>
										</div>
										<div className="relative mb-6" data-te-Input-wrapper-init>
											<Textarea
												label="Message"
												isClearable
												className="min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear"
												radius="none"
												id="exampleFormControlTextarea1"
											></Textarea>
										</div>

										<Button
											fullWidth
											radius="none"
											className="bg-mintGreen text-white hover:bg-orangePrimary transition-colors duration-300"
										>
											Send
										</Button>
									</form>
								</div>
								<div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
									<div className="flex flex-wrap">
										<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
											<div className="flex items-start">
												<div className="shrink-0">
													<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															className="h-6 w-6"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
															/>
														</svg>
													</div>
												</div>
												<div className="ml-6 grow">
													<p className="mb-2 font-bold dark:text-white">
														Call Us
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														+88 01331070310
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														+88 01331070311
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														+88 01331070312
													</p>
												</div>
											</div>
										</div>
										<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
											<div className="flex items-start">
												<div className="shrink-0">
													<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															viewBox="0 0 512 512"
															fill="currentColor"
															className="h-6 w-6"
														>
															<path d="M496 128.05A64 64 0 00389.62 80a64.52 64.52 0 00-12.71 15.3v.06c-.54.9-1.05 1.82-1.55 2.74l-.24.49c-.42.79-.81 1.59-1.19 2.4-.12.25-.23.5-.34.75-.33.73-.65 1.47-.95 2.22-.13.31-.25.62-.37.93-.27.7-.53 1.4-.78 2.11l-.36 1.06c-.22.68-.43 1.37-.63 2.06-.12.39-.23.77-.33 1.16-.19.67-.35 1.35-.51 2-.1.41-.2.82-.29 1.23-.14.68-.27 1.37-.39 2-.08.42-.16.84-.23 1.26-.11.7-.2 1.41-.29 2.12-.05.41-.11.82-.16 1.24-.08.77-.13 1.54-.19 2.32 0 .36-.06.72-.08 1.08-.06 1.14-.1 2.28-.1 3.44 0 1 0 2 .08 2.94v.64q.08 1.41.21 2.82l.06.48c.09.85.19 1.69.32 2.52 0 .17 0 .35.07.52.14.91.31 1.81.49 2.71 0 .22.09.43.13.65.18.86.38 1.72.6 2.57v.19c.23.89.48 1.76.75 2.63l.21.68c.27.85.55 1.68.85 2.51.06.18.13.36.2.54.27.71.55 1.42.84 2.12.08.21.16.41.25.61.34.79.69 1.58 1.06 2.36l.33.67c.35.7.7 1.4 1.07 2.09a64.34 64.34 0 0022.14 23.81 62.22 62.22 0 007.62 4.15l.39.18q2.66 1.2 5.43 2.16l.95.32 1.5.47c.45.14.9.26 1.36.39l1.92.5 1.73.4 1.15.23 1.83.33.94.15c.9.13 1.81.25 2.72.35l.77.07c.73.06 1.47.12 2.21.16l.86.05c1 0 1.94.08 2.92.08 1.16 0 2.3 0 3.44-.1l1.08-.08c.78-.06 1.55-.11 2.32-.19l1.25-.16c.7-.09 1.41-.18 2.11-.29l1.26-.23c.68-.12 1.37-.25 2-.39l1.23-.29c.68-.16 1.36-.32 2-.51.39-.1.77-.21 1.16-.33.69-.2 1.38-.41 2.06-.63l1.06-.36c.71-.25 1.41-.51 2.11-.78l.93-.37c.75-.3 1.49-.62 2.22-.95l.75-.34c.81-.38 1.61-.77 2.4-1.19l.49-.24c.92-.5 1.84-1 2.74-1.55h.06A64.52 64.52 0 00480 170.38a63.81 63.81 0 0016-42.33z" />
															<path d="M371.38 202.53l-105.56 82.1a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l94.22-73.28A95.86 95.86 0 01348.81 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V211.19a95.85 95.85 0 01-108.62-8.66z" />
														</svg>
													</div>
												</div>
												<div className="ml-6 grow">
													<p className="mb-2 font-bold dark:text-white">
														Send Mail
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														tarbiyah.office@gmail.com
													</p>
												</div>
											</div>
										</div>
										<div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
											<div className="align-start flex">
												<div className="shrink-0">
													<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															className="h-6 w-6"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
															/>
														</svg>
													</div>
												</div>
												<div className="ml-6 grow">
													<p className="mb-2 font-bold dark:text-white">
														Address
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														House 13, Block-b, Main road
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														Dakkhin Banasree, Khilgaon, Dhaka - 1219
													</p>
												</div>
											</div>
										</div>
										<div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
											<div className="align-start flex">
												<div className="shrink-0">
													<div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
														<svg
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															viewBox="0 0 24 24"
															className="h-6 w-6"
														>
															<path stroke="none" d="M0 0h24v24H0z" />
															<path d="M19.5 7A8.998 8.998 0 0012 3a8.991 8.991 0 00-7.484 4M11.5 3a16.989 16.989 0 00-1.826 4M12.5 3a16.989 16.989 0 011.828 4.004M19.5 17a8.998 8.998 0 01-7.5 4 8.991 8.991 0 01-7.484-4M11.5 21a16.989 16.989 0 01-1.826-4M12.5 21a16.989 16.989 0 001.828-4.004M2 10l1 4 1.5-4L6 14l1-4M17 10l1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4" />
														</svg>
													</div>
												</div>
												<div className="ml-6 grow">
													<p className="mb-2 font-bold dark:text-white">
														Visit Website
													</p>
													<p className="text-neutral-500 dark:text-neutral-200">
														tarbiyah.info
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- Section: Design Block --> */}
			</div>
			{/* <!-- Container for demo purpose --> */}
		</>
	);
};

export default Contact;
