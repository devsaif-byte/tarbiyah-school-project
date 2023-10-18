import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import chiefAdvisor from '../../images/chief_advisor.jpeg'

export function ProfileCard() {
  return (
    <section className="container py-12">

<h2 className="mb-12 text-center text-3xl font-bold">Teachers</h2>
    <Card className="lg:w-1/3 md:w-1/2 w-full shadow-none hover:shadow-md rounded-none bg-gray-100">
      <CardHeader floated={false} className="h-auto shadow-none rounded-none">
        <img src={chiefAdvisor} alt="profile-picture" className="mx-auto w-full"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="mb-2 text-orangePrimary">
          Dr. Mohammad Motiul Islam
        </Typography>
        <Typography variant="paragraph" color="blue-gray" className="font-medium text-left" textGradient>
          Chief Adviser: Tarbiyah Ideal School <br />
          Assistant Professor, Bangladesh Islami University. <br /> Bachelor’s Degree
          in Holi Quran & Its Sciences From the Faculty of theology, Al-Imam
          Islamic University. Riyadh. K. S. A <br /> The Master’s Degree. in Holi Quran
          & Its Sciences From the Faculty of theology, Al-Imam Islamic
          University. Riyadh. K. S. A <br /> PhD. in Dawah -& Islamic Studies , Passing
          Year 2005, Islamic University, Kustia, Bangladesh
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
            >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
            >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
            </section>
  );
}
