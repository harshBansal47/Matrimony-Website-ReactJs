import carryImage from '../images/team/carry.jpeg';
import founderImage from '../images/team/founder.jpeg';
import rahulImage from '../images/team/rahul.jpeg';
import cmoImage from '../images/team/cmo.jpeg';
import cofounderImage from '../images/team/cofounder.png';
// import marketerImage from '../images/team/marketting.jpeg';
// import dheerajImage from '../images/team/dheeraj.jpeg';
import harshImage from '../images/team/harsh.jpg';

interface Employee {
  name: string;
  id: number;
  position: string;
  linkedin: string;
  imageUrl: string; // Change from StaticImageData to string for direct image URLs
}

interface Team {
  teamName: string;
  employees: Employee[];
}

const teams: Team[] = [
  {
    teamName: "Miisco",
    employees: [
      {
        name: "Mohit Maheshwari",
        id: 1,
        position: "Founder",
        linkedin: "https://www.linkedin.com/in/mohit-maheshwari-71073b34/",
        imageUrl: founderImage,
      },
      {
        name: "Vishal Maheshwari",
        id: 2,
        position: "Co-Founder",
        linkedin: "https://www.linkedin.com/in/vishal-maheshwari-902473114/",
        imageUrl: cofounderImage,
      },
      {
        name: "Rahul Sen",
        id: 8,
        position: "App Developer",
        linkedin: "https://www.linkedin.com/in/rahul-sen-450465152/",
        imageUrl: rahulImage,
      },
      {
        name: "Abhishek",
        id: 7,
        position: "Backend Developer",
        linkedin: "https://www.linkedin.com/in/carryadder/",
        imageUrl: carryImage,
      },
      // {
      //   name: "Dheeraj Jawar",
      //   id: 5,
      //   position: "SDET-1",
      //   linkedin: "https://www.linkedin.com/in/dhiraj-zawar-19424124a/",
      //   imageUrl: dheerajImage,
      // },
      {
        name: "Harsh Bansal",
        id: 6,
        position: "Website Developer",
        linkedin: "https://www.linkedin.com/in/hrs473",
        imageUrl: harshImage,
      },
      {
        name: "Riya Rathi",
        id: 4,
        position: "CMO",
        linkedin: "https://www.linkedin.com/in/riya-rathi-5150961a6/",
        imageUrl: cmoImage,
      },
      // {
      //   name: "Anugrah Maheshwari",
      //   id: 3,
      //   position: "Marketing Specialist",
      //   linkedin: "https://www.linkedin.com/in/anugrah-maheshwari-a1a806241/",
      //   imageUrl: marketerImage,
      // },
    ],
  },
];

export default teams;
