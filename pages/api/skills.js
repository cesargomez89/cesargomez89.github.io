export default function handler(req, res) {
  res.status(200).json([
    {
      category: 'DevOps',
      skills: [
        "AWS",
        "Heroku",
        "Docker",
        "Jenkins",
        "Gitlab CI/CD",
      ]
    },
    {
      category: 'Backend',
      skills: [
        "Ruby",
        "Rails",
        "Sinatra",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "DynamoDB",
        "ElasticSearch",
      ]
    },
    {
      category: 'Frontend',
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Stimulus",
        "Angular",
        "Bootstrap",
        "TailwindCSS",
      ]
    },
    {
      category: 'Social',
      skills: [
        "Collaboration",
        "Mentoring",
        "Adaptability",
        "Problem Solving",
      ]
    },
  ])
}
