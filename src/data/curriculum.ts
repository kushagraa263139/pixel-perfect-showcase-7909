/**
 * All content lives here. Swap these arrays for real data later —
 * every page renders from this file, nothing is hardcoded in markup.
 */

export type SemesterStatus = "active" | "coming-soon";

export type HandwrittenNote = {
  id: string;
  title: string;
  topper: string;
  topperNote: string;
  pages: number;
  covers: string;
};

export type TeacherNote = {
  id: string;
  title: string;
  teacher: string;
  format: string;
  unit: string;
};

export type VideoPick = {
  id: string;
  title: string;
  channel: string;
  duration: string;
  exam: "Mid-Sem" | "End-Sem" | "Both";
  why: string;
};

export type Subject = {
  slug: string;
  name: string;
  code: string;
  tag: string;
  handwritten: HandwrittenNote[];
  teacher: TeacherNote[];
  videos: VideoPick[];
};

export type Semester = {
  number: number;
  slug: string;
  status: SemesterStatus;
  label: string;
  note: string;
  subjects: Subject[];
};

const genericVideos = (subject: string): VideoPick[] => [
  {
    id: `${subject}-v1`,
    title: `${subject} \u2014 Complete Mid-Sem Revision in One Shot`,
    channel: "Gate Smashers",
    duration: "1h 12m",
    exam: "Mid-Sem",
    why: "Covers Unit 1 & 2 exactly in the order the paper asks.",
  },
  {
    id: `${subject}-v2`,
    title: `${subject} Numericals \u2014 Solved Previous Year Questions`,
    channel: "Physics Wallah \u2013 Engineering",
    duration: "48m",
    exam: "End-Sem",
    why: "Same question patterns repeat every year, he solves 20 of them.",
  },
  {
    id: `${subject}-v3`,
    title: `${subject} Last Night Before Exam Marathon`,
    channel: "Knowledge Gate",
    duration: "2h 05m",
    exam: "Both",
    why: "Raat 2 baje wali padhai ke liye perfect \u2014 only high-weightage topics.",
  },
];

const makeSubject = (
  slug: string,
  name: string,
  code: string,
  tag: string,
  toppers: [string, string][],
  teachers: [string, string][],
): Subject => ({
  slug,
  name,
  code,
  tag,
  handwritten: toppers.map(([topper, covers], i) => ({
    id: `${slug}-h${i}`,
    title: `${name} \u2014 ${covers}`,
    topper,
    topperNote:
      i === 0
        ? "Diagrams ke saath likha hai, exam mein wahi draw karna."
        : "Margin mein chhote shortcuts hain \u2014 unhe skip mat karna.",
    pages: 28 + i * 14,
    covers,
  })),
  teacher: teachers.map(([teacher, unit], i) => ({
    id: `${slug}-t${i}`,
    title: `${name} \u2014 ${unit} (Official Slides)`,
    teacher,
    format: i % 2 === 0 ? "PDF" : "PPT",
    unit,
  })),
  videos: genericVideos(name),
});

export const semesters: Semester[] = [
  {
    number: 1,
    slug: "1",
    status: "active",
    label: "First year, first fear",
    note: "Sab kuch naya lagta hai \u2014 yeh notes us confusion ko kam karenge.",
    subjects: [
      makeSubject(
        "engineering-mathematics-i",
        "Engineering Mathematics I",
        "MA101",
        "Calculus heavy",
        [
          ["Ananya Rao (9.4 CGPA)", "Unit 1\u20133 Full Notes"],
          ["Harsh Vardhan", "Matrices & Sequences"],
        ],
        [
          ["Prof. S. Mehta", "Unit 1 \u2013 Differential Calculus"],
          ["Prof. S. Mehta", "Unit 4 \u2013 Multiple Integrals"],
        ],
      ),
      makeSubject(
        "engineering-physics",
        "Engineering Physics",
        "PH101",
        "Numericals",
        [["Ritika Sen (9.1 CGPA)", "Optics + Lasers"]],
        [["Dr. A. Kulkarni", "Unit 2 \u2013 Wave Optics"]],
      ),
      makeSubject(
        "programming-in-c",
        "Programming in C",
        "CS101",
        "Scoring",
        [
          ["Mohit Jain", "Pointers Made Simple"],
          ["Sneha Pillai", "Full Syllabus Short Notes"],
        ],
        [["Prof. R. Bansal", "Unit 3 \u2013 Arrays & Strings"]],
      ),
      makeSubject(
        "basic-electrical-engineering",
        "Basic Electrical Engineering",
        "EE101",
        "Circuits",
        [["Devansh Kapoor", "Network Theorems"]],
        [["Prof. N. Iyer", "Unit 1 \u2013 DC Circuits"]],
      ),
    ],
  },
  {
    number: 2,
    slug: "2",
    status: "coming-soon",
    label: "Even sem",
    note: "Seniors ke notes scan ho rahe hain.",
    subjects: [],
  },
  {
    number: 3,
    slug: "3",
    status: "active",
    label: "Branch shuru ho gayi",
    note: "Yahin se core subjects serious hote hain.",
    subjects: [
      makeSubject(
        "data-structures",
        "Data Structures",
        "CS201",
        "Placement gold",
        [
          ["Kritika Bose (9.6 CGPA)", "Trees & Graphs"],
          ["Aditya Menon", "Linked List Dry Runs"],
        ],
        [["Prof. V. Deshmukh", "Unit 2 \u2013 Stacks & Queues"]],
      ),
      makeSubject(
        "digital-logic-design",
        "Digital Logic Design",
        "EC201",
        "Diagram heavy",
        [["Farhan Qureshi", "K-Maps & Flip Flops"]],
        [["Dr. P. Nair", "Unit 3 \u2013 Sequential Circuits"]],
      ),
      makeSubject(
        "discrete-mathematics",
        "Discrete Mathematics",
        "MA201",
        "Theory",
        [["Ishita Verma", "Proofs & Relations"]],
        [["Prof. S. Mehta", "Unit 1 \u2013 Set Theory & Logic"]],
      ),
      makeSubject(
        "object-oriented-programming",
        "Object Oriented Programming",
        "CS203",
        "Scoring",
        [["Rohan Dey", "Java OOP Crash Notes"]],
        [["Prof. R. Bansal", "Unit 4 \u2013 Exception Handling"]],
      ),
    ],
  },
  {
    number: 4,
    slug: "4",
    status: "coming-soon",
    label: "Even sem",
    note: "Subject list finalize ho rahi hai.",
    subjects: [],
  },
  {
    number: 5,
    slug: "5",
    status: "active",
    label: "Placement season",
    note: "Notes + interview prep, dono chahiye hote hain.",
    subjects: [
      makeSubject(
        "operating-systems",
        "Operating Systems",
        "CS301",
        "Interview favourite",
        [
          ["Nikhil Saxena (9.3 CGPA)", "Scheduling & Deadlocks"],
          ["Tanvi Shah", "Memory Management"],
        ],
        [["Dr. M. Ghosh", "Unit 3 \u2013 Virtual Memory"]],
      ),
      makeSubject(
        "computer-networks",
        "Computer Networks",
        "CS303",
        "Layer-wise",
        [["Zoya Khan", "TCP/IP Full Notes"]],
        [["Dr. M. Ghosh", "Unit 2 \u2013 Data Link Layer"]],
      ),
      makeSubject(
        "database-management-systems",
        "Database Management Systems",
        "CS305",
        "Scoring",
        [["Arjun Pillai", "Normalization in 6 Pages"]],
        [["Prof. L. Fernandes", "Unit 4 \u2013 Transactions"]],
      ),
      makeSubject(
        "theory-of-computation",
        "Theory of Computation",
        "CS307",
        "Tough",
        [["Meera Iyer", "Automata Practice Set"]],
        [["Prof. L. Fernandes", "Unit 1 \u2013 Finite Automata"]],
      ),
    ],
  },
  { number: 6, slug: "6", status: "coming-soon", label: "Even sem", note: "Jaldi aayega.", subjects: [] },
  {
    number: 7,
    slug: "7",
    status: "coming-soon",
    label: "Final year",
    note: "Electives ke notes collect kar rahe hain.",
    subjects: [],
  },
  {
    number: 8,
    slug: "8",
    status: "coming-soon",
    label: "Almost out",
    note: "Project + viva material soon.",
    subjects: [],
  },
];

export const getSemester = (slug: string) => semesters.find((s) => s.slug === slug);

export const getSubject = (semSlug: string, subjectSlug: string) => {
  const sem = getSemester(semSlug);
  return { sem, subject: sem?.subjects.find((s) => s.slug === subjectSlug) };
};

export const seniors = [
  {
    name: "Ankit Bhaiya",
    branch: "CSE \u201924",
    initials: "AB",
    line: "Pehle sem mein 2 backlogs the. Isliye yeh site exist karti hai.",
    gives: "OS, DBMS notes",
  },
  {
    name: "Priya Didi",
    branch: "ECE \u201924",
    initials: "PD",
    line: "Handwriting achhi hai, toh notes ka kaam mera. \u270D\uFE0F",
    gives: "Digital Logic, Maths",
  },
  {
    name: "Sameer Bhaiya",
    branch: "CSE \u201925",
    initials: "SB",
    line: "YouTube pe 40 videos dekh ke 3 best chunta hoon.",
    gives: "Video picks, placement prep",
  },
];
