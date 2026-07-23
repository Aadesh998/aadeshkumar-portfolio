import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["Go (Golang)", "Python", "SQL", "Bash", "Java"],
  },
  {
    title: "Backend & APIs",
    items: [
      "REST APIs",
      "Microservices",
      "gRPC",
      "GraphQL",
      "WebSockets",
      "Serverless (Lambda)",
      "Event-Driven Architecture",
    ],
  },
  {
    title: "Cloud",
    items: [
      "AWS EC2",
      "S3",
      "Lambda",
      "SQS",
      "Fargate",
      "DynamoDB",
      "RDS",
      "IAM",
      "CloudWatch",
      "GCP",
    ],
  },
  {
    title: "Data & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "SQS",
      "ElasticSearch / OpenSearch",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Linux",
      "Docker",
      "Kubernetes",
      "CI/CD — Jenkins, GitHub Actions",
      "Git",
      "Nginx",
      "Caddy",
      "Cloudflare",
    ],
  },
  {
    title: "Observability",
    items: ["OpenTelemetry", "Grafana", "CloudWatch"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "LLMs",
      "RAG",
      "Vector Search",
      "NLP",
      "MCP",
      "Convolutional Neural Networks (CNN)",
      "Fine Tuning",
      "Computer Vision",
      "OCR",
    ],
  },
  {
    title: "Practices",
    items: ["Software Design", "System Design", "Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f4f3f1] text-[#121212]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
        >
          What I work with<span className="text-[#121212]/30">.</span>
        </motion.h2>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <h3 className="border-b border-[#121212]/15 pb-3 text-sm font-semibold uppercase tracking-widest text-[#121212]/50">
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#121212]/20 px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-[#121212] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
