import Badge from "@/components/ui/Badge";

export default function SectionTitle({
    badge,
    title,
    description,
    align = "center",
}) {
    const alignment = {
        left: "items-start text-left",
        center: "items-center text-center",
    };

    return (
        <div
          className={`
            flex
            flex-col
            gap-5
            ${alignment[align]}
          `}
        >
          {badge && (
            <Badge variant="primary">
              {badge}
            </Badge>
          )}
          
          <h2
            className="
              max-w-4x1
              text-4x1
              font-bold
              leading-tight
              tracking-tight
              text-white
              md:text-5x1
            "
          >
            {title}
          </h2>

            {description && (
              <p
                className="
                  max-w-2x1
                  text-lg
                  leading-8
                  text-[var(--text)]
                "
              >
                {description}
              </p>
            )}
        </div>
    );
}