const techs = [
  { slug: "python", name: "Python" },
  { slug: "pandas", name: "Pandas" },
  { slug: "numpy", name: "NumPy" },
  { slug: "jupyter", name: "Jupyter" },
  { slug: "mysql", name: "SQL" },
  { slug: "microsoftexcel", name: "Excel" },
  { slug: "powerbi", name: "Power BI" },
  { slug: "plotly", name: "Plotly" },
  { slug: "kaggle", name: "Kaggle" },
  { slug: "github", name: "GitHub" },
  { slug: "googlecolab", name: "Colab" },
];

export function SkillsCarousel() {
  const loop = [...techs, ...techs];
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="marquee-track flex w-max gap-3">
        {loop.map((t, i) => (
          <div
            key={`${t.slug}-${i}`}
            className="glass flex shrink-0 items-center gap-3 rounded-xl px-4 py-3"
          >
            {t.slug === "powerbi" ? (
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-90 fill-current text-foreground"
              >
                <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z" />
              </svg>
            ) : t.slug === "microsoftexcel" ? (
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-90 fill-current text-foreground"
              >
                <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z" />
              </svg>
            ) : (
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/ffffff`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="size-5 opacity-90"
              />
            )}
            <span className="whitespace-nowrap text-sm font-medium text-foreground/90">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}