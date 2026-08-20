import {
  DataProvider,
  GetListParams,
  GetListResponse,
  BaseRecord,
} from "@refinedev/core";
import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An overview of programming, algorithms, data, and computational thinking.",
    createdAt: "2026-01-15",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Techniques and applications of integration, series, and multivariable functions.",
    createdAt: "2026-01-16",
  },
  {
    id: 3,
    code: "ENG102",
    name: "Academic Writing",
    department: "English",
    description:
      "Practice in research, argumentation, revision, and clear academic communication.",
    createdAt: "2026-01-17",
  },
  {
    id: 4,
    code: "BIO110",
    name: "General Biology",
    department: "Biology",
    description:
      "Foundations of cell biology, genetics, evolution, ecology, and biological systems.",
    createdAt: "2026-01-18",
  },
  {
    id: 5,
    code: "PHYS120",
    name: "University Physics I",
    department: "Physics",
    description:
      "An introduction to mechanics, energy, momentum, and rotational motion.",
    createdAt: "2026-01-19",
  },
  {
    id: 6,
    code: "ECON210",
    name: "Principles of Microeconomics",
    department: "Economics",
    description:
      "How individuals, firms, and markets make decisions under limited resources.",
    createdAt: "2026-01-20",
  },
  {
    id: 7,
    code: "HIST205",
    name: "Modern World History",
    department: "History",
    description:
      "Major political, social, and economic developments from the eighteenth century onward.",
    createdAt: "2026-01-21",
  },
  {
    id: 8,
    code: "PSYC101",
    name: "Introduction to Psychology",
    department: "Psychology",
    description:
      "A survey of human behavior, cognition, development, personality, and mental health.",
    createdAt: "2026-01-22",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource != "subjects") {
      return { data: [] as TData[], total: 0 };
    }
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error("not implemented yet");
  },
  create: async () => {
    throw new Error("not implemented yet");
  },
  update: async () => {
    throw new Error("not implemented yet");
  },
  deleteOne: async () => {
    throw new Error("not implemented yet");
  },

  getApiUrl: () => "",
};
