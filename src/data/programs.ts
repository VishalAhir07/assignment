export interface Program {
  id: number;
  university: string;
  country: string;
  flag: string;
  description: string;
  fullDetails: string;
  tuitionRange: string;
  duration: string;
  language: string;
  color: string;
}

const programs: Program[] = [
  {
    id: 1,
    university: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    description: "Top ranked university offering multiple international programs.",
    fullDetails:
      "The University of Toronto is a globally recognized institution offering 700+ undergraduate programs. Known for its strong research culture, it attracts students from 160+ countries. Programs in engineering, business, and life sciences are especially popular among international students.",
    tuitionRange: "$30,000 – $45,000 / year",
    duration: "4 Years",
    language: "English",
    color: "#E8F4FD",
  },
  {
    id: 2,
    university: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    description: "Popular destination for international students with world-class facilities.",
    fullDetails:
      "University of Melbourne consistently ranks among the top 50 universities worldwide. It offers a vibrant campus life and strong industry connections across Melbourne's thriving tech and finance sectors. International students make up over 40% of the student body.",
    tuitionRange: "$28,000 – $42,000 / year",
    duration: "3 Years",
    language: "English",
    color: "#FFF3E0",
  },
  {
    id: 3,
    university: "Parul University",
    country: "India",
    flag: "🇮🇳",
    description: "One of India's largest private universities with global academic exposure.",
    fullDetails:
      "Parul University, located in Vadodara, Gujarat, is one of India's fastest-growing private universities. It offers 300+ programs across engineering, management, law, medicine, and design. Known for its industry-focused curriculum and strong placement record, it is a top choice for students seeking quality education in India.",
    tuitionRange: "₹80,000 – ₹2,00,000 / year",
    duration: "3–4 Years",
    language: "English / Hindi",
    color: "#F3E5F5",
  },
];

export default programs;