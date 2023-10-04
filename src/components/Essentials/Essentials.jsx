import React from "react";
import RedButton from "../Buttons/RedButton";
import { Button } from "@material-tailwind/react";

const Essentials = () => {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="py-24 mx-auto md:px-6 bg-mintGreen">
				{/* Section: Design Block */}
				<section className="container text-center">
					<h2 className="mb-12 text-center text-3xl font-bold">Essentials</h2>
					<div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
						<div className="mb-6 lg:mb-0">
							<div
								className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat  "
								data-te-ripple-init=""
								data-te-ripple-color="light"
							>
								<img
									src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
									className="w-full"
									alt="Louvre"
								/>
							</div>
							<h5 className="mb-3 text-lg font-bold">একাডেমিক শিডিউল</h5>

							<p className="text-neutral-500 mb-6">
								Ut pretium ultricies dignissim. Sed sit amet mi eget urna
								placerat vulputate. Ut vulputate est non quam dignissim
								elementum. Donec a ullamcorper diam.
							</p>
							<Button children="Learn More" to="/academic-schedule" />
						</div>
						<div className="mb-6 lg:mb-0">
							<div
								className="relative mb-6 overflow-hidden bg-cover bg-no-repeat  "
								data-te-ripple-init=""
								data-te-ripple-color="light"
							>
								<img
									src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg"
									className="w-full"
									alt="Louvre"
								/>
							</div>
							<h5 className="mb-3 text-lg font-bold">ভর্তি প্রক্রিয়া</h5>

							<p className="text-neutral-500  mb-6">
								Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
								orci, nec ornare metus semper sed. Integer volutpat ornare erat
								sit amet rutrum.
							</p>
							<Button children="Learn More" to="/admission-procedure" />
						</div>
						<div className="mb-0">
							<div>
								<div
									className="relative mb-6 overflow-hidden bg-cover bg-no-repeat  "
									data-te-ripple-init=""
									data-te-ripple-color="light"
								>
									<img
										src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg"
										className="w-full"
										alt="Louvre"
									/>
								</div>
								<h5 className="mb-3 text-lg font-bold">অন্যান্য</h5>

								<p className="text-neutral-500  mb-6">
									Curabitur tristique, mi a mollis sagittis, metus felis mattis
									arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
									massa volutpat feugiat. Donec.
								</p>
								<Button children="Learn More"  />
							</div>
						</div>
					</div>
				</section>
				{/* Section: Design Block */}
			</div>
			{/* Container for demo purpose */}
		</>
	);
};

export default Essentials;
