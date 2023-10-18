import React from "react";
import { Button } from "@material-tailwind/react";
import baby from '../../images/baby.jpg'
import admission from '../../images/advice.jpg'
import others from '../../images/abc.jpg'
import { Link } from "react-router-dom";
const Essentials = () => {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="py-24 mx-auto md:px-6 bg-gray-100">
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
									src={baby}
									className="w-full"
									alt="Louvre"
								/>
							</div>
							<h5 className="mb-3 text-lg font-bold">একাডেমিক শিডিউল</h5>

							<p className="text-neutral-500 mb-6">
								Ut pretium ultricies dignissim. Sed sit amet mi eget urna
								placerat vulputate. Ut vulputate est non quam dignissim
								elementum.
							</p>
							<Link to="/academic-schedule">
							
							<Button className="rounded-none bg-mintGreen" size="md"  children="Learn More" />
							</Link>
						</div>
						<div className="mb-6 lg:mb-0">
							<div
								className="relative mb-6 overflow-hidden bg-cover bg-no-repeat  "
								data-te-ripple-init=""
								data-te-ripple-color="light"
							>
								<img
									src={admission}
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
							<Link to="/admission-procedure">
							
							<Button  className="rounded-none bg-mintGreen" size="md"  children="Learn More"/>
							</Link>
						</div>
						<div className="mb-0">
							<div>
								<div
									className="relative mb-6 overflow-hidden bg-cover bg-no-repeat  "
									data-te-ripple-init=""
									data-te-ripple-color="light"
								>
									<img
										src={others}
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
								<Button className="rounded-none bg-mintGreen" size="md"  children="Learn More"  />
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
